import numpy as np
import os

from sklearn.model_selection import train_test_split
from keras.utils import to_categorical
from keras.models import load_model, Sequential
from keras.layers import LSTM, Dense
from keras.callbacks import TensorBoard

from constants import NUMPY_DATA_PATH, actions, video_frames

label_map = {label: num for num, label in enumerate(actions)}

sequences, labels = [], []
for action in actions:
    for sequence in np.array(os.listdir(os.path.join(NUMPY_DATA_PATH, action))).astype(int):
        window = []
        for frame_num in range(video_frames):
            res = np.load(os.path.join(NUMPY_DATA_PATH, action,
                          str(sequence), f"{frame_num}.npy"))
            window.append(res)
        sequences.append(window)
        labels.append(label_map[action])

X = np.array(sequences)
y = to_categorical(labels).astype(int)


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.05)

log_dir = os.path.join('Logs')
tb_callback = TensorBoard(log_dir=log_dir)

model = Sequential()
model.add(LSTM(64, return_sequences=True,
          activation='relu', input_shape=(30, 1662)))
model.add(LSTM(128, return_sequences=True, activation='relu'))
model.add(LSTM(64, return_sequences=False, activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dense(32, activation='relu'))
model.add(Dense(actions.shape[0], activation='softmax'))

model.compile(optimizer='Adam', loss='categorical_crossentropy',
              metrics=['categorical_accuracy'])

model.fit(X_train, y_train, epochs=2000, callbacks=[tb_callback])

model.save('action.keras')

import numpy as np

from sklearn.metrics import multilabel_confusion_matrix, accuracy_score
from keras.models import load_model

from train_classifier import X_test, y_test

model = load_model('action.keras')

yhat = model.predict(X_test)

ytrue = np.argmax(y_test, axis=1).tolist()
yhat = np.argmax(yhat, axis=1).tolist()

matrix = multilabel_confusion_matrix(ytrue, yhat)

print(matrix)

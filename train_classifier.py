import pickle 

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split 
from sklearn.metrics import accuracy_score

import numpy as np

data_dict = pickle.load(open('./data.pickle', 'rb'))

#split the data into two sets so you can train your classifier -- one to train & test the performance
data = np.asarray(data_dict['data'])
labels = np.asarray(data_dict['labels'])

#actually splits the data -- takes everything from data & labels & splits it into train & test
# only 20% is used for test (which is standard)
# shuffle data makes the tests more effective 
# keep the same proportion of train and test data for all the labels (1/3 is label 1, 2 and 3)
x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

model = RandomForestClassifier()

model.fit(x_train, y_train) #trained our classifiers
y_predict = model.predict(x_test) #made our predictions

score = accuracy_score(y_predict, y_test)

print('{}% of the samples were classified correctly !'.format(score*100))

f = open('model.p', 'wb')
pickle.dump({'model': model}, f)
f.close()

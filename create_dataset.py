import os 

import mediapipe as mp 
import cv2
import matplotlib.pyplot as plt

#important for detecting landmarks & draw these landmarks on top of the images
mp_hands = mp.solutions.hands 
mp_drawing = mp.solutions.drawing_utils 
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

DATA_DIR = './data'

for dir_ in os.listdir(DATA_DIR):
    for img_path in os.listdir(os.path.join(DATA_DIR, dir_))[:1]: #takes the first image from each collection
        img = cv2.imread(os.path.join(DATA_DIR, dir_, img_path)) #reads the image from the file (essentially reads every image)
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) #converts the image into RBG (since OpenCV reads images in BGR format)

        results = hands.process(img_rgb) #allows us to detect all the landmarks in the image
        #but what are the landmarks? -- reiterating from all the results that we get from the line above
        if results.multi_hand_landmarks:    
            for hand_landmarks in results.multi_hand_landmarks:
                for i in range(len(hand_landmarks.landmark)):
                    print(hand_landmarks.landmark[i])

        plt.figure()
        plt.imshow(img_rgb)

plt.show()
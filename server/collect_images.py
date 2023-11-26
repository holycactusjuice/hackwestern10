import os
import cv2

# directory containing training data
DATA_DIR = "./data"
# if directory does not yet exist, create one
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# number of different signs to be collected
CLASSES = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
# number of images to capture per sign
DATASET_SIZE = 100

# video capture object
cap = cv2.VideoCapture(0)

# collect data for each
for sign in CLASSES:
    # save images with path ./data/{sign}
    class_folder = os.path.join(DATA_DIR, sign)
    if not os.path.exists(class_folder):
        os.makedirs(class_folder)

    print(f"Collecting data for class {sign}")

    while True:
        ret, frame = cap.read()
        if not ret or frame is None:
            print("Failed to capture frame")
            continue

        cv2.putText(frame, f"Press Q to begin data collection for class {sign}", (100, 50),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 0), 1, cv2.LINE_AA)
        cv2.imshow("frame", frame)
        # begin capturing images on key press
        if cv2.waitKey(25) == ord('q'):
            break

    counter = 0
    while counter < DATASET_SIZE:
        ret, frame = cap.read()
        if not ret or frame is None:
            print("Failed to capture frame")
            continue

        cv2.imshow("frame", frame)
        cv2.waitKey(25)
        # write the image to the class folder
        cv2.imwrite(os.path.join(class_folder, f"{counter}.jpg"), frame)

        counter += 1

    print(f"Data collection finished for class {sign}")

cap.release()
cv2.destroyAllWindows()

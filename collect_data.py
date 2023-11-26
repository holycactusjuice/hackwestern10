import cv2
import numpy as np
import os

from constants import NUMPY_DATA_PATH, VIDEO_DATA_PATH, actions, no_videos, video_frames

# make new directory for each video for each action
for action in actions:
    for vid in range(no_videos):
        try:
            os.makedirs(os.path.join(VIDEO_DATA_PATH, action, str(vid)))
        except:
            pass


cap = cv2.VideoCapture(0)
# Loop through actions
for action in actions:
    print(f"Collecting data for class {action}")
    # Loop through sequences aka videos
    for vid in range(no_videos):
        print(f"Action: {action}, Video: {vid}")

        while True:
            ret, frame = cap.read()

            cv2.putText(frame, f"Press Q to begin data collection for action: {action}", (100, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 0), 1, cv2.LINE_AA)
            cv2.imshow("frame", frame)
            # begin capturing images on key press
            if cv2.waitKey(25) == ord('q'):
                break

        # Loop through video length aka sequence length
        for frame_num in range(video_frames):

            # Read feed
            ret, frame = cap.read()

            cv2.imshow("frame", frame)
            cv2.waitKey(25)

            cv2.imwrite(os.path.join(
                VIDEO_DATA_PATH, action, str(vid), str(frame_num) + ".jpg"), frame)

            # Break gracefully
            if cv2.waitKey(10) & 0xFF == ord('q'):
                break

    print(f"Data collection finished for class {action}")

cap.release()
cv2.destroyAllWindows()

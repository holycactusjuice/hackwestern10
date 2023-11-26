import os
import numpy as np

# Path for numpy data directory
NUMPY_DATA_PATH = os.path.join('numpy_data')
# Path for video data directory
VIDEO_DATA_PATH = os.path.join('video_data')

# Actions that we try to detect
actions = np.array(['hello', 'thanks', 'I love you'])

# Thirty videos worth of data
no_videos = 5

# Videos are going to be 30 frames in length
video_frames = 30

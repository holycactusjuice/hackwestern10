import os
import numpy as np

# Path for numpy data directory
NUMPY_DATA_PATH = os.path.join('numpy_data')
# Path for video data directory
VIDEO_DATA_PATH = os.path.join('video_data')

# Actions that we try to detect
actions = np.array(['hello', 'thanks', 'I love you'])

# number of videos of data
no_videos = 30

# number of frames per video
video_frames = 30

# from constants import NUMPY_DATA_PATH, VIDEO_DATA_PATH, actions, no_videos, video_frames

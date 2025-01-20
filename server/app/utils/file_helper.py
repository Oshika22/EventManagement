import os

def ensure_folder_exists(folder):
    if not os.path.exists(folder):
        os.makedirs(folder)

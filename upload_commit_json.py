# upload_commit_json.py
# John NOTE: THE GOOGLE_SECRE_.JSON is not using anyway, try rmoved it later may-12-2025


import os
import glob
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# === CONFIGURATION ===
SCOPES = ['https://www.googleapis.com/auth/drive.file']
FOLDER_ID = '1sSqu2eQQydKjy-WIZzXfluuk6EoTfAE4'  # javis_shell
TOKEN_FILE = 'token.json'
SECRET_FILE = 'client_secret.json'
COMMIT_LOG_FOLDER = 'commit_log'

def get_drive_service():
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    return build('drive', 'v3', credentials=creds)

def upload_to_drive(file_path, drive_service):
    file_metadata = {
        'name': os.path.basename(file_path),
        'parents': [FOLDER_ID],
        'mimeType': 'application/json'
    }
    media = MediaFileUpload(file_path, mimetype='application/json')
    uploaded = drive_service.files().create(
        body=file_metadata,
        media_body=media,
        fields='id, name'
    ).execute()
    print(f"✅ Uploaded: {uploaded['name']} (ID: {uploaded['id']})")

def main():
    if not os.path.exists(COMMIT_LOG_FOLDER):
        print("❌ No commit_log/ folder found.")
        return

    json_files = glob.glob(f"{COMMIT_LOG_FOLDER}/*.json")
    if not json_files:
        print("ℹ️ No JSON files to upload.")
        return

    service = get_drive_service()
    for file_path in json_files:
        upload_to_drive(file_path, service)

if __name__ == "__main__":
    main()


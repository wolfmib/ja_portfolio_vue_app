# ja_portfolio_vue_app
As fron-end to show case by using threejs and aws-infra to build ai-game (llm)







## Featuer: 





## Feature: Link Sub-Domain IFrame

### Updates
- Added iframe between **Certificate** and **Skills** components.
  - Adjusted iframe margins for better visual alignment: **15% left**, **10% right**.
  - Displayed a fallback message in golden color when iframe load fails.
- Implemented logic to hide the iframe when accessed from a mobile or tablet device.
  - Added a method to detect user agent and determine if the client is on mobile.








---

# Developer Commands for JA Portfolio Vue App

### Git Commands
- **Create a new branch**
  ```sh
  git checkout -b <branch_name>
  ```
  
- **Stage all changes**
  ```sh
  git add .
  ```
  
- **Commit changes**
  ```sh
  git commit -m "<commit_message>"
  ```

- **Push branch to remote**
  ```sh
  git push -u origin <branch_name>
  ```

- **Merge feature branch into main**
  ```sh
  git checkout main
  git pull origin main
  git merge <branch_name>
  git push origin main
  ```

### AWS S3 Sync Commands
- **Upload files to S3 bucket**
  ```sh
  aws s3 sync dist/ s3://johnny-alin-data.com --delete
  ```

### Vite Commands
- **Start the Vite dev server**
  ```sh
  npx vite --port 8888
  ```

- **Rebuild and deploy to S3**
  ```sh
  npm run build
  aws s3 sync dist/ s3://johnny-alin-data.com --delete
  ```

### Nginx Commands
- **Restart Nginx**
  ```sh
  sudo systemctl restart nginx
  ```

### Certificate Management Commands
- **Obtain SSL certificate using Certbot**
  ```sh
  sudo certbot certonly --standalone -d one.game.johnny-alin-data.com
  ```

- **Renew SSL certificate**
  ```sh
  sudo certbot renew
  ```

### General Development Commands
- **Install dependencies**
  ```sh
  npm install
  ```

- **Build Vue app for production**
  ```sh
  npm run build
  ```

### Cron Job Setup for Automatic S3 Sync
- **Edit crontab to automate S3 sync every hour**
  ```sh
  crontab -e
  ```
- **Add the following line to sync files every hour**
  ```
  0 * * * * /usr/bin/aws s3 sync /path/to/dist s3://johnny-alin-data.com --delete >> /var/log/s3_sync.log 2>&1
  ```
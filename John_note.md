
## Clan cache and check Chrome
- To force Google Chrome on macOS to reload the latest version of a webpage and bypass the cache, you can use this keyboard shortcut:

**Command (⌘) + Shift + R**

This forces Chrome to reload the page while ignoring the cache entirely. If that doesn’t work, you can also try:

**Command (⌘) + Option (⌥) + E**

This will empty the cache and then you can refresh the page.


-------


## Vimdeo 
- replace video-id
- keep player-id the same when embded




## Check vue version first 
[ec2-user@ip-172-31-37-41 ~]$ vue --version
@vue/cli 5.0.8
[ec2-user@ip-172-31-37-41 ~]$ npx vue --version
@vue/cli 5.0.8



## Checking status nginx
sudo systemctl status nginx



## memo dist permission

[ec2-user@ip-172-31-37-41 ~]$ ls -l my-new-vue-project/dist
total 656
-rwxr-xr-x. 1 ec2-user webapp  10819 Jul  1 10:47 android-chrome-192x192.png
-rwxr-xr-x. 1 ec2-user webapp  29449 Jul  1 10:47 android-chrome-512x512.png
-rwxr-xr-x. 1 ec2-user webapp   9841 Jul  1 10:47 apple-touch-icon.png
drwxr-xr-x. 2 ec2-user webapp     64 Jul  1 10:36 css
-rwxr-xr-x. 1 ec2-user webapp    666 Jul  1 10:47 favicon-16x16.png
-rwxr-xr-x. 1 ec2-user webapp   1395 Jul  1 10:47 favicon-32x32.png
-rw-r--r--. 1 ec2-user webapp  15406 Jul  1 10:47 favicon.ico
drwxr-xr-x. 2 ec2-user webapp  16384 Jul  1 10:36 fonts
-rw-r--r--. 1 ec2-user webapp 100505 Jul  1 10:36 gan1.jpg
-rw-r--r--. 1 ec2-user webapp 189032 Jul  1 10:36 gan1.png
-rw-r--r--. 1 ec2-user webapp 170059 Jul  1 10:36 gan2.png
-rw-r--r--. 1 ec2-user webapp  60765 Jul  1 10:36 gan2_v1.png
-rw-r--r--. 1 ec2-user webapp  18290 Jul  1 10:36 gggg.jpg
drwxr-xr-x. 2 ec2-user webapp     78 Jul  1 10:36 img
-rw-r--r--. 1 ec2-user webapp   1220 Jul  1 10:45 index.html
drwxr-xr-x. 2 ec2-user webapp  16384 Jul  1 10:36 js
-rw-r--r--. 1 ec2-user webapp    923 Jul  1 10:36 tem.txt







## If facing cert expired
sudo certbot renew



## Set the time one
[ec2-user@ip-172-31-37-41 ~]$ sudo timedatectl set-timezone Europe/Malta
[ec2-user@ip-172-31-37-41 ~]$ timedatectl
               Local time: Thu 2024-10-17 00:07:44 CEST
           Universal time: Wed 2024-10-16 22:07:44 UTC
                 RTC time: Wed 2024-10-16 22:07:44
                Time zone: Europe/Malta (CEST, +0200)

## Set cront install 
sudo yum install cronie -y

sudo systemctl start crond
sudo systemctl enable crond



- Checked the EC2 AWS instance status:
  - Verified Nginx server is running properly using the command:
    ```bash
    sudo systemctl status nginx
    ```
- Checked the SSL certificate expiration status:
  - Used the following command to verify the SSL certificate validity:
    ```bash
    sudo openssl x509 -in /etc/letsencrypt/live/johnny-alin-data.com/fullchain.pem -noout -dates
    ```
  - Found that the certificate was expired.
- Successfully renewed the SSL certificate using Certbot:
  - Ran the renewal command:
    ```bash
    sudo certbot renew
    ```
- Set up automation for SSL certificate renewal:
  - Edited crontab to add a cron job for renewal:
    ```bash
    sudo crontab -e
    ```
  - Added the following line to ensure automatic renewal at 8:30 AM Malta time:
    ```bash
    30 8 * * * /usr/bin/certbot renew --quiet >> /var/log/certbot_renew.log 2>&1
    ```
  - Ensured that the automated renewal process aligns with the EC2 instance running schedule.

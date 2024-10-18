




## in index.html

direct href how to auto ?
https://johnny-alin-data.com/css/chunk-vendors.1f580222.css













## Blue print 
# Blueprint Summary for Implementation Plan
#
# 1. Implement a login button at the top-right corner of the website to handle JWT token credential feature.
#    - Users will click this button to authenticate and receive a JWT token.
#    - The token will be used for subsequent access and retained for session management.
#
# 2. After successful login, the user will be able to click on a hidden button (gaming redirect button).
#    - This button will only be visible after login, enabling users to access the game.
#    - Clicking this button will redirect them to the /live_on_mars path.
#
# 3. The game server will continuously verify the provided JWT token to grant or deny access.
#    - The token is required for every interaction with the game server, ensuring secure access.
#    - If the token is invalid or expired, the user will be prompted to log in again.









## 2024-10-16 checking automation build to add icon-link in index.html.
### Summary of Today’s Work

- **Checked and Updated the Vue Project Setup**:
  - Verified the Vue CLI and project structure.
  - Resolved issues related to missing Vue plugins during the build.

- **Automated Build Process**:
  - Updated `package.json` to include `inject_custom_content.js` after the build step.
  - Added a reference to the deployment script (`ja_deploy_favicon_20240701.sh`) in `$HOME` to execute after building.

- **Content Enhancements in Portfolio Page**:
  - Updated the main portfolio introduction to emphasize:
    - **Data Science and AI work**.
    - **LLMs** (Large Language Models) and **FAISS vector store** experience.
  - Modified the role description to highlight **Data Scientist**, **AI Developer**, and other skills.

- **Testing and Validation**:
  - Successfully built the Vue.js project using:
    ```bash
    npm run build
    ```
  - Verified that the **index.html** file was automatically updated with the injected custom content using `inject_custom_content.js`.
  - Confirmed that running the build will now **auto-update `index.html`**, **copy favicons**, **change permissions**, and **restart Nginx**.

### Key Highlight
- **Automation Completed**: Simply run:
```bash
  npm run build
```

- This command will automatically:
- Update index.html using the modifications defined in inject_custom_content.js.
- Execute the bash script (ja_deploy_favicon_20240701.sh) to:
  - Copy favicon files.
  - Change permissions appropriately.
  - Restart Nginx server to reflect changes.

## Nice work today! 🎉 Everything is streamlined and automated for future deployments!










## 2023-05-13 night club
footer issue 
install npm install --save @fortawesome/fontawesome-free again 







## 2023-05-13 Abut favicon.ico
put it on index.html

<!-- Font used in this project: Lemonada -->
<!-- Font Author: The Lemonada Project Authors -->
<!-- Font License: SIL Open Font License, 1.1 -->
<!-- License details: http://scripts.sil.org/OFL -->
<!-- Font Source: https://fonts.gstatic.com/s/lemonada/v28/0QI-MXFD9oygTWy_R-FFlwV-bgfR7QJGeut2mfWc3Z2pTg.ttf -->

Remember taking care group webapp !
=========================================






## vue config add 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
     publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

    vuetify: {
                        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
                }
  }
})


## index.html

<link href="styles/styles.css" rel="stylesheet" type="text/css"/>





## mmtype isue : put type in config
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf|eot)$ {
        types {
            text/css css;
            application/javascript js;
        }
        expires 365d;
        add_header Cache-Control "public";
    }



## Try 
 npm install -D less-loader less
 nvm install v18

 npm install -g serve
  serve -s dist
vue add vuetify
npm install @fortawesome/fontawesome-free




## Group 
groups ec2-user
sudo chgrp -R webapp dist

## import to index.html

<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">




if fail:
    npm run build

error with  ERROR  Error: EACCES: permission denied, rmdir '/home/ec2-user/my-new-vue-project/dist/js' 
then: 
   sudo chown -R ec2-user:ec2-user /home/ec2-user/my-new-vue-project/

retry:
   npm run build 


# then reload nginx
sudo systemctl reload nginx







When deploying updates to a Vue.js application running behind Nginx in a production environment, the typical steps involve rebuilding your application and then ensuring Nginx serves the updated files. Here's a general workflow to follow:

### Step 1: Build Your Vue.js Application
First, you need to build your Vue.js application, which compiles and minifies your assets for production use. Typically, this is done using the npm script defined in your `package.json`, often named `build`. Run this command from the root directory of your Vue.js project:

```bash
npm run build
```

This command generates a `dist/` directory (or whatever your output directory is configured as in your `vue.config.js` or similar configuration file) containing the optimized files ready to be served by Nginx.

### Step 2: Update Your Production Server
Next, you need to update the production server with these new files. This usually involves copying them to the directory from which Nginx serves your application. How you do this can vary based on your setup—using FTP, SCP, rsync, or any file transfer method you prefer. For example, using `rsync` might look like this:

```bash
rsync -avz --delete /path/to/local/dist/ user@your-server:/path/to/nginx/html/
```

Make sure the `--delete` flag is used to remove old files that are no longer needed. Replace `/path/to/local/dist/` with the path to your local `dist` directory and `user@your-server:/path/to/nginx/html/` with the path and credentials for your production server.

### Step 3: Reload Nginx
After the new files are in place, you may need to tell Nginx to reload its configuration to ensure it picks up any changes. This is done securely without dropping connections using:

```bash
sudo nginx -s reload
```

Or, depending on your system's setup, you might use system control commands:

```bash
sudo systemctl reload nginx
```
or
```bash
sudo service nginx reload
```

### Considerations
- **Permissions and Ownership**: Ensure the files in the directory Nginx is serving from have the correct permissions and ownership so that Nginx can read them.
- **Caching Issues**: Sometimes, browsers might cache files aggressively. Make sure your Vue.js build process includes hash versions in filenames (common with Webpack setups) to avoid issues with users getting old files from their cache.
- **Nginx Configuration**: Ensure your Nginx configuration is set up to serve your Vue.js application correctly, particularly that it's configured to always serve `index.html` for routes managed by Vue Router.

Following these steps should ensure your Vue.js application is built and deployed correctly with updates reflecting immediately in your production environment managed by Nginx.
# S3 Static Website Configuration for Vue.js App

## Issue: 404 Not Found on Routes
When hosting a Vue.js Single Page Application (SPA) on Amazon S3, accessing certain routes like `/show_case/aws/aws_glue` resulted in a `404 Not Found` error with the message `Code: NoSuchKey`. This happened because S3 looks for physical files for each route, and the Vue Router handles routes client-side.

### Solution: Configure S3 to Serve `index.html` for All Routes
To fix this, we need to configure S3 to always serve `index.html` for any route that does not have a corresponding file in the bucket. This ensures that Vue.js can handle the routes on the client side.

1. **Set the Index Document** to `index.html`.
2. **Set the Error Document** to `index.html`. This ensures that all non-existing paths will return `index.html`, and the Vue Router will take over and render the correct page.

### Steps:
- Go to the **S3 bucket properties**.
- Under **Static website hosting**, configure:
  - **Index document**: `index.html`
  - **Error document**: `index.html`

This configuration ensures that the S3 bucket serves the main `index.html` file for all routes, allowing the Vue.js router to manage navigation.

### Notes:
- This is necessary for Single Page Applications (SPAs) because routing is handled on the client side (browser), and S3 doesn’t know about these routes.
- This solution is suitable for Vue.js, React, or any other SPA framework.

### Reference:
- **Command to Sync to S3**: 
  ```bash
  aws s3 sync dist/ s3://johnny-alin-data.com --delete

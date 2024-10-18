// inject_custom_content.js
const fs = require('fs');
const path = require('path');

// Corrected path to the generated index.html after the build
const indexPath = path.join(__dirname, 'dist', 'index.html');


// The custom content you want to inject
const customContent = `
    <!-- Favicon and touch icons -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <!-- Android Chrome icons -->
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">
`;

// Read the generated index.html and replace the placeholder with the custom content
fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading index.html:', err);
        return;
    }

    // Replace the placeholder with the custom content
    const result = data.replace('%CUSTOM_FAVICON%', customContent);

    // Write the updated index.html back to the file system
    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) {
            console.error('Error writing index.html:', err);
        } else {
            console.log('Successfully updated index.html with custom content.');
        }
    });
});

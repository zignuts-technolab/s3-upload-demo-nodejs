# S3 File Upload

### Summary

This small utility checks the access permissions of your S3 bucket by uploading a test file into your bucket. It uploads a file with public read access using an IAM user (Access Key and Secret).
Feel free to play around the code by changing various settings of ACL as per your requirements.

### Installation

- Make sure you have node and npm installed
- Clone this repo and `cd` into the folder
- Go to terminal and run `npm install`
- Open your favorite terminal and edit index.js file

### Testing

- Open your terminal
- Run `node s3-upload.js`
- If you see the success message that means all is good.
- If you see any error, make sure to check correct credentials and S3 bucket access permissions.

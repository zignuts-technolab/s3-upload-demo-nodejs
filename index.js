const fs = require('fs');
const AWS = require('aws-sdk');


const REGION = "ap-south-1";
const BUCKET_NAME = "bucket-name";
const ACCESS_KEY = "your-access-key";
const SECRET_KEY = "your-secret-key";

AWS.config.update({ region: REGION });

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY
});

const fileName = 'data/text.txt';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    const params = {
      Bucket: BUCKET_NAME, // pass your bucket name
      Key: 'text.txt', // file will be saved as testBucket/contacts.csv
      Body: JSON.stringify(data, null, 2),
      ACL: 'public-read'
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err
      console.log(`File uploaded successfully at ${data.Location}`)
    });
  });
};

uploadFile();
module.exports = {
  //Server database
  MONGODB_USERNAME: "YOUR_DB_USERNAME",
  MONGODB_PASSWORD: "YOUR_DB_PASSWORD",
  MONGODB_DB_NAME: "YOUR_DB_NAME",

  //Port
  PORT: process.env.PORT || 5000,

  //Secret key for API
  SECRET_KEY: "YOUR_SECRET_KEY",

  //Secret key for jwt
  JWT_SECRET: "YOUR_JWT_SECRET",

  //Gmail credentials for send email
  EMAIL: "YOUR_EMAIL",
  PASSWORD: "YOUR_PASSWORD",

  //Server URL
  baseURL: "https://yourdomain.com/",

  //aws credentials
  endpoint: "your_endpoint",
  aws_access_key_id: "your_access_key",
  aws_secret_access_key: "your_secret_key",
  region: "your_region",
  bucketName: "your_bucketName",

  //Firebase server key for notification
  SERVER_KEY: "YOUR_SERVER_KEY",
};

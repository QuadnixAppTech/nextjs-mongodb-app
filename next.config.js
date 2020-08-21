require('dotenv').config();

module.exports = {
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    DB_NAME: process.env.DB_NAME,
    WEB_URI: process.env.WEB_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  serverRuntimeConfig: {
    MONGODB_URI: `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DB_NAME}`,
  },
};

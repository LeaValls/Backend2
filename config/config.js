require('dotenv').config()

module.exports = {
    MONGO_URL: process.env.MONGO_URL,

    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_STRATEGY_NAME: process.env.GITHUB_STRATEGY_NAME,

    PORT: process.env.PORT,
    HOST: process.env.HOST,

    PERSISTANCE: process.env.MANAGER_PERSISTANCE,

   
  }

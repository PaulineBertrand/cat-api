// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
const { default: mongoose } = require('mongoose')
require('dotenv/config')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/catApi'

async function openConnection() {
  await mongoose.connect(MONGO_URI)
}

module.exports = openConnection

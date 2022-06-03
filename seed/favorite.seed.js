const User = require('../models/User.model.js')
const CatPicture = require('../models/CatPicture.model.js')
const Favorite = require('../models/Favorite.model.js')

const openConnection = require('../db/index.js')
const { default: mongoose } = require('mongoose')

// SEED the database
// adding initial data from an external source (or handcoded)

const favorites = []

async function seedFavorites() {
  await openConnection()
  const allUsers = await User.find()
  const allCatPics = await CatPicture.find()
  favorites.push({pic: allCatPics[2]._id, user: allUsers[0]._id})
  favorites.push({pic: allCatPics[2]._id, user: allUsers[2]._id})
  favorites.push({pic: allCatPics[0]._id, user: allUsers[1]._id})
  favorites.push({pic: allCatPics[1]._id, user: allUsers[2]._id})

  const createdFavorites = await Favorite.create(favorites)
  console.log(`Created ${createdFavorites.length} favorites.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedFavorites()

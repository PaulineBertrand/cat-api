const User = require('../models/User.model.js')
const CatPicture = require('../models/CatPicture.model.js')

const openConnection = require('../db/index.js')
const { default: mongoose } = require('mongoose')

// SEED the database
// adding initial data from an external source (or handcoded)

const catPics = [
  {title: 'white cat', link: 'https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341__340.jpg'},
  {title: 'hes tired so cute lol', link: 'https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400__340.jpg'},
  {title: 'mean cat', link: 'https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332__340.jpg'},
  {title: 'in the forest', link: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'}
]

async function seedCatPics() {
  await openConnection()
  const allUsers = await User.find()
  catPics[0].owner = allUsers[0]._id
  catPics[1].owner = allUsers[0]._id
  catPics[2].owner = allUsers[1]._id
  catPics[3].owner = allUsers[2]._id

  const createdCatPics = await CatPicture.create(catPics)
  console.log(`Created ${createdCatPics.length} cat pics.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedCatPics()

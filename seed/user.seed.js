const User = require('../models/User.model.js')
const openConnection = require('../db/index.js')
const { default: mongoose } = require('mongoose')

// SEED the database
// adding initial data from an external source (or handcoded)

const users = [
  { username: 'Toto', password: '1234', contact: {email: 'toto@mail.com', phoneNumber: '0612345678' }},
  { username: 'Tata', species: '1234', contact: {email: 'tata@mail.com', phoneNumber: '0612345678' }},
  { username: 'Titi', species: '1234', contact: {email: 'titi@mail.com', phoneNumber: '0612345678' }},
]

async function seedUsers() {
  await openConnection()
  const createdUsers = await User.create(users)
  console.log(`Created ${createdUsers.length} users.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedUsers()

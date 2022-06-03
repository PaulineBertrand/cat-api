const router = require('express').Router()
const User = require('../models/User.model.js')
const { default: mongoose } = require('mongoose')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({},{password: 0, _id: 0})
    console.log('USERS')
    console.log(users)
  
    res.json(users)

  } catch (err) {
    console.error(err)
    next(err)
  }
})



router.post('/', async (req, res, next) => {
  const userToCreate = req.body
  const createdUser = await User.create(userToCreate)

  res.json(createdUser)
})


module.exports = router

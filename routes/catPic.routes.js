const router = require('express').Router()
const CatPicture = require('../models/CatPicture.model.js')

const { default: mongoose } = require('mongoose')

router.get('/', async (req, res, next) => {
  try {
    const allCatPics = await CatPicture.find()
    res.status(200).json(allCatPics)
  } catch (err) {
    // having the error as the argument of next allows us to get into the second middleware
    // from error-handling.js if there is a database error (we don't want a 404 in this case)
    next(err)
  }
})

router.get('/:catPicId', async (req, res, next) => {
    try {
        const catPicId = req.params.catPicId
        const oneCatPic = await CatPicture.findById(catPicId)
        res.status(200).json(oneCatPic)
    } catch (err) {
        next(err)
    }
  })

router.get('/user/:userId', async (req, res, next) => {
    try {
        const thisUsersCatPics = await CatPicture.find({owner: req.params.userId})
        res.status(200).json(thisUsersCatPics)

    } catch (err) {
        next(err)
    }
  })

router.post('/', async (req, res, next) => {

})

// It's okay to have the same url for a GET and a PUT route - the verbs tell us what they do
router.put('/:catPicId', async (req, res, next) => {
    try {
        const catPicId = req.params.catPicId
        // the "{new: true}" option allows us to get the updated version of the document instead of the previous one 
        const updatedCatPic = await User.findByIdAndUpdate(catPicId, req.body, {new: true})
        res.status(200).json(updatedCatPic)
    } catch (err) {

        next(err)
    }
})

router.delete('/:catPicId', async (req, res, next) => {
    try {
        const deletedThing = await CatPicture.findByIdAndDelete(req.params.catPicId)
        console.log(deletedThing)
        res.json({message: `I deleted ${deletedThing.title}`})
    } catch (err) {

        next(err)
    }
})

// alternative syntax

// router.route('/:catPicId')
// .get((req, res, next)=>{
//     //blabla
// })
// .post((req, res, next)=>{})
// .put((req, res, next)=>{})
// .delete((req, res, next)=>{})



module.exports = router

const { Schema, SchemaTypes, model } = require('mongoose')
// const mongoose = require('mongoose')


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const catPicSchema = new Schema(
  {
    title: String,
    link: String,
    owner: {
        type: SchemaTypes.ObjectId,
        ref: "User"
    },
  },
  {
    timestamps: true,
  }
)

const CatPicture = model('CatPicture', catPicSchema)

module.exports = CatPicture

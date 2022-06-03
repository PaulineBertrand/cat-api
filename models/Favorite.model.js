const { Schema, SchemaTypes, model } = require('mongoose')


const favoriteSchema = new Schema(
  {
    catPic: {
        type: SchemaTypes.ObjectId,
        ref: "CatPicture"
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User"
    },
    
  },
  {
    timestamps: true,
  }
)

const Favorite = model('Favorite', favoriteSchema)

module.exports = Favorite

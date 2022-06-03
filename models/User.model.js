const { Schema, SchemaTypes, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: { type: String },
    password: String,
    contact: {
      email: {
        type: String,
        required: true,
        unique: true
      },
      phoneNumber: {
        type: String
      }
    },

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User

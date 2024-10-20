import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide the username'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
    },
    involvedChats: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
      default: [],
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
  }
);

userSchema.methods.verifyPassword = (providedPassword, storedPassword) => {

}

const User = mongoose.model('User', userSchema);

export default User;

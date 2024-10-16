import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide the first name'],
  },
  lastName: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    required: [true, 'Please provide the username'],
    unique: true,
  },
  involvedChats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

export default User;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide the username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide the username'],
  },
  involvedChats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

export default User;

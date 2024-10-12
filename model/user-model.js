const schema = new mongoose.Schema({
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
  messagedUsers: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model('User', schema);

export default mongoose.model('users', userSchema);

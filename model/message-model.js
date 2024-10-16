import mongoose from 'mongoose';

const schema = mongoose.Schema({
  senderUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'senderUserId is missing'],
  },
  recipientUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'recipientUserId is missing'],
  },
  messageText: {
    type: String,
    required: [true, 'messageText is missing'],
  },
});

const Message = mongoose.model('Message', schema);

export default Message;

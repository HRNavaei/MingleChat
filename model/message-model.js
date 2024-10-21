import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  senderUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'senderUserId is missing'],
  },
  recipientUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'recipientUserId is missing'],
  },
  messageText: {
    type: String,
    required: [true, 'messageText is missing'],
  },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;

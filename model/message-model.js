import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  senderUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'senderUserId is missing'],
  },
  messageText: {
    type: String,
    required: [true, 'messageText is missing'],
  },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;

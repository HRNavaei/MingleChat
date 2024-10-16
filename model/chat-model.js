import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
  participant1: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    required: [true, 'participant1 is missing.'],
  },
  participant2: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    required: [true, 'participant2 is missing.'],
  },
  messages: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  },
});

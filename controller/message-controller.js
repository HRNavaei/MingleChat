import Message from '../model/message-model.js';
import User from '../model/user-model.js';

export const sendMessage = async (req, res, next) => {
  const { senderUserId, recipientUserId, messageText } = req.body;

  const senderUser = await User.findOne({ username: senderUserId });
  if (!senderUser) {
    res.status(404).json({
      state: 'fail',
      message: 'Sender user not existed',
    });
  } else {
    const recipientUser = await User.findOne({ username: recipientUserId });
    if (!recipientUser) {
      res.status(404).json({
        state: 'fail',
        message: 'Recipient user not existed',
      });
    } else {
      console.log(recipientUser);
      const message = await Message.create({
        senderUser: senderUser._id,
        recipientUser: recipientUser._id,
        messageText: messageText,
      });

      res.status(200).json({
        state: 'success',
        data: {
          message,
        },
      });
    }
  }
};

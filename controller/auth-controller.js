import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../model/user-model.js';

export const signup = async (req, res, next) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  const token = jwt.sign({ username }, process.env.JWT_SECRET);

  res.status(201).json({
    state: 'success',
    data: {
      user,
      token,
    },
  });
};

export const signin = async (req, res, next) => {
  const providedUsername = req.body.username;
  const providedPassword = req.body.password;

  const user = await User.findOne(
    { username: providedUsername },
    'username password'
  );

  let isPasswordCorrect = await bcrypt.compare(providedPassword, user.password);
  if (!isPasswordCorrect) {
    res.status(401).json({
      state: 'fail',
      data: {
        message: 'Incorrect password',
      },
    });
  } else {
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);

    res.status(200).json({
      state: 'success',
      data: {
        user,
        token,
      },
    });
  }
};

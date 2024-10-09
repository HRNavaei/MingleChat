const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  res.json({
    a: 'Hello!',
    b: req.body,
  });
  next();
});

module.exports = app;

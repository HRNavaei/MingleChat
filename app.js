import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/signup', (req, res, next) => {
  res.json({
    a: 'Hello!',
    b: req.body,
  });
  next();
});

export default app;

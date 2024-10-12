import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: `./config.env` });

import app from './app.js';

const dbUri = process.env.DB_URI;
mongoose.connect(dbUri).then(() => console.log('Connected to DB successfully'));

app.listen(process.env.PORT, () => console.log('Server is listening'));

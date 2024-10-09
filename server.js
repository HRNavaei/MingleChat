const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const dbUri = process.env.DB_URI;
mongoose.connect(dbUri).then(() => console.log('Connect to DB successfully'));

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

const dbUri = process.env.DB_URI;
mongoose.connect(dbUri).then(() => console.log('Connected to DB successfully'));

app.listen(process.env.PORT, () => console.log('Server is listening'));

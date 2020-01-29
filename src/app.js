const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDb = require('./db');

require('dotenv').config({ path: './src/config/.env' });

const app = express();

const port = process.env.PORT || 5000;
const uriDb = process.env.ATLAS_URI;

connectDb(uriDb);

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

const lectionsRouter = require('./routes');

app.use('/lections', lectionsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

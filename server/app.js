import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
// eslint-disable-next-line import/no-extraneous-dependencies
import open from 'open';

dotenv.config();

const PORT = process.env.PORT || 8080;
const { NODE_ENV } = process.env;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(PORT, async () => {
  if (NODE_ENV === 'production') {
    await open(`http://localhost:${PORT}`);
  }
  console.log(`Server is running on port ${PORT}`);
});

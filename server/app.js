import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
// eslint-disable-next-line import/no-extraneous-dependencies
import open from 'open';

import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;
const { NODE_ENV } = process.env;
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(PORT, async () => {
  if (NODE_ENV === 'production') {
    await open(`http://localhost:${PORT}`);
  }
  console.log(`Server is running on port ${PORT}`);
});

// routes
app.get('/', (req, res) => {
  res.redirect('/order');
});

app.use('/order', orderRoutes);

app.use((req, res) => {
  res.status(404).render('404');
});

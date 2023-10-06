import express from 'express';
import * as orderController from '../controllers/orderController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.send('This page is reserved for receiving form data');
});

router.post('/', orderController.orderCreatePost);

export default router;

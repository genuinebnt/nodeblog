import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'genuine' });
});

router.get('/about', (req, res) => {
  res.send('About page');
});

export { router as blogRouter };

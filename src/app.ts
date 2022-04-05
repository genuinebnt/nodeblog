import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'genuine' });
});

export { app };

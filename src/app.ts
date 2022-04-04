import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 8000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

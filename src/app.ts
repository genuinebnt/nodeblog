import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
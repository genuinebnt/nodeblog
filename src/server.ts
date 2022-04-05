import { app } from '../src/app';

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);

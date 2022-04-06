import { app, logger } from '../src/app';

const port = process.env.PORT || 8000;

app.listen(port, () =>
  logger.info(`Express server is running on port ${port}`)
);

import { app } from './app';
import { logger } from './config/logger';

const port = process.env.PORT || 8000;

app.listen(port, () =>
  logger.info(`Express server is running on port ${port}`)
);

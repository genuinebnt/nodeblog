import express from 'express';
import morgan from 'morgan';
import { createLogger, transports, format } from 'winston';

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5
};

const logger = createLogger({
  levels: logLevels,
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.colorize({ all: true })
  ),
  transports: [new transports.Console()]
});

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'genuine' });
});

export { app, logger };

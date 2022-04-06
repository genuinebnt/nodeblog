import express from 'express';
import morgan from 'morgan';
import { db } from './config/db';

import 'dotenv/config';

// routes
import { blogRouter } from './routes/blog';

const app = express();

app.use(morgan('combined'));

db();

app.use('/', blogRouter);

export { app };

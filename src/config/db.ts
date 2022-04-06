import mongoose from 'mongoose';
import { logger } from '../config/logger';

import 'dotenv/config';

const username: string = process.env.USERNAME;
const password: string = process.env.PASSWORD;
const database: string = process.env.DATABASE;

const url = `mongodb+srv://${username}:${password}@cluster0.zkhcy.mongodb.net/${database}?retryWrites=true&w=majority`;

const db = async () => {
  try {
    await mongoose.connect(url);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error(
      `Cannot connect to mongodb with username: ${username} and password: ${password} on database: ${database} `
    );
  }
};

export { db };

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import env from '../config/env';

const sqlite = new Database(env.dbFileName);
export const db = drizzle({ client: sqlite });

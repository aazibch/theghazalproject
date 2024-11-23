import mongoose from 'mongoose';
import dotenv from 'dotenv'; // For use with the import-dev-data.ts script.

dotenv.config({ path: '.env.local' });

let DB: string;
let cachedConnection: {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} = { conn: null, promise: null };

if (process.env.DB && process.env.DB_PASS) {
  DB = process.env.DB.replace('<password>', process.env.DB_PASS);
} else {
  throw new Error(
    'Please define the DB environment variable inside .env.local'
  );
}

async function dbConnect() {
  if (cachedConnection.conn) {
    return cachedConnection.conn;
  }

  if (!cachedConnection.promise) {
    const opts = {
      bufferCommands: false
    };
    cachedConnection.promise = mongoose.connect(DB, opts).then((mongoose) => {
      console.log('Connected to the database.');
      return mongoose;
    });
  }

  try {
    cachedConnection.conn = await cachedConnection.promise;
  } catch (e) {
    cachedConnection.promise = null;
    throw e;
  }

  return cachedConnection.conn;
}

export default dbConnect;

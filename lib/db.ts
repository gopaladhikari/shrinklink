import mongoose from "mongoose";

const mongodbURI = process.env.MONGODB_URI;

if (!mongodbURI)
  throw new Error("Please provide MONGODB_URI in the environment variables");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    promise: null,
    conn: null,
  };
}

export async function connectToDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    mongoose.connect(mongodbURI, {
      dbName: "shrinklink",
      bufferCommands: true,
      maxPoolSize: 10,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
}

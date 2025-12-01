import { dbName } from "@/constants";
import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI!;

if (!mongodbUri) throw new Error("Please provide MONGODB_URI env");

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
    mongoose.connect(mongodbUri, {
      dbName,
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

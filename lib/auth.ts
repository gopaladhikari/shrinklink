import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) throw new Error("Please provide MONGODB_URI env");

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { dbName } from "@/constants";

const client = new MongoClient(`${mongodbUri}/${dbName}`);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
});

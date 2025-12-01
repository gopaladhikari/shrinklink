import { Connection } from "mongoose";

declare global {
  var mongoose: {
    promise: Promise<Connection> | null;
    conn: Connection | null;
  };

  interface Params<T = string> {
    params: Promise<Record<T, string>>;
    searchParams: Promise<Record<T, string>>;
  }
}

export {};

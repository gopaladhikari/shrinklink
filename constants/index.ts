export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://gopuadks-shrinkllink.netlify.app"
    : "http://localhost:3000";

export * from "./messages";
export * from "./site";

import mongoose, { type Model } from "mongoose";

interface IUser {
  email: string;
  name: string;
  stripeCustomerId?: string;
  plan: "free" | "premium";
  premiumUntil?: Date;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    stripeCustomerId: { type: String },
    plan: { type: String, enum: ["free", "premium"], default: "free" },
    premiumUntil: { type: Date },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);

export { User };

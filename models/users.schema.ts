import mongoose, { type Model } from "mongoose";

interface IUser {
  email: string;
  name: string;
  stripeCustomerId?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    stripeCustomerId: { type: String },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);

export { User };

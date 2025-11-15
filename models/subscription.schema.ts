import mongoose, { type Model } from "mongoose";

interface ISubscription {
  userId: string;
  stripeSubscriptionId: string;
  status: string;
  currentPeriodEnd: Date;
}

const SubscriptionSchema = new mongoose.Schema<ISubscription>(
  {
    userId: { type: String, required: true, unique: true },
    stripeSubscriptionId: { type: String, required: true },
    status: { type: String, required: true },
    currentPeriodEnd: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Subscription: Model<ISubscription> =
  mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);

export { Subscription };

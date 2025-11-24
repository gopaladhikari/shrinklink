import mongoose, { type Model } from "mongoose";

interface ISubscription {
  userId: mongoose.Types.ObjectId;
  stripeSubscriptionId: string;
  status: string;
  currentPeriodEnd: Date;
}

const SubscriptionSchema = new mongoose.Schema<ISubscription>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
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

import mongoose, { type Model } from "mongoose";

interface IClick {
  urlId: string;
  timestamp: Date;
  ip: string;
  country: string;
  device: string;
}

const ClickSchema = new mongoose.Schema<IClick>(
  {
    urlId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    ip: { type: String },
    country: { type: String },
    device: { type: String },
  },
  {
    timestamps: true,
  }
);

const Click: Model<IClick> =
  mongoose.models.Click || mongoose.model("Click", ClickSchema);

export { Click };

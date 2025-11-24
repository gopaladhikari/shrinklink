import mongoose, { type Model } from "mongoose";

interface IClick {
  urlId: mongoose.Types.ObjectId;
  timestamp: Date;
  ipHash?: string;
  country?: string;
  city?: string;
  device?: string;
  os?: string;
  browser?: string;
  referrer?: string;
}

const ClickSchema = new mongoose.Schema<IClick>(
  {
    urlId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      index: true,
      ref: "URL",
    },
    timestamp: { type: Date, default: Date.now },
    ipHash: { type: String },
    country: { type: String },
    city: { type: String },
    device: { type: String },
    os: { type: String },
    browser: { type: String },
    referrer: { type: String },
  },
  {
    timestamps: true,
  }
);

const Click: Model<IClick> =
  mongoose.models.Click || mongoose.model("Click", ClickSchema);

export { Click };

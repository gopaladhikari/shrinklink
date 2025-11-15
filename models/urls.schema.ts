import mongoose, { type Model } from "mongoose";

interface IURL {
  orginalUrl: string;
  code: string;
  password: string;
  expiresAt: Date;
  clicks: number;
  userId: string;
  createdAt: Date;
}

const URLSchema = new mongoose.Schema<IURL>(
  {
    code: { type: String, required: true, unique: true },
    orginalUrl: { type: String, required: true, unique: true },
    password: { type: String },
    expiresAt: { type: Date },
    clicks: { type: Number, default: 0 },
    userId: { type: String },
  },
  {
    timestamps: true,
  }
);

const URLS: Model<IURL> =
  mongoose.models.URL || mongoose.model("URL", URLSchema);

export { URLS };

import mongoose, { type Model } from "mongoose";

interface IURL {
  orginalUrl: string;
  shortCode: string;
  userId?: mongoose.Types.ObjectId;

  // Premium-only features
  customAlias?: string;
  password?: Date;
  expiresAt?: number;

  isBranded?: boolean;
}

const URLSchema = new mongoose.Schema<IURL>(
  {
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
    orginalUrl: { type: String, required: true, unique: true },
    password: { type: String },
    expiresAt: { type: Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    customAlias: { type: String },
    isBranded: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const URL: Model<IURL> =
  mongoose.models.URL || mongoose.model("URL", URLSchema);

export { URL };

import mongoose, { Model } from "mongoose";

interface IQuota {
  userId: mongoose.Types.ObjectId;
  year: number;
  month: number;
  count: number;
}

const QuotaSchema = new mongoose.Schema<IQuota>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  count: { type: Number, default: 0 },
});

const Quoata: Model<IQuota> = mongoose.model("Quota", QuotaSchema);

export { Quoata };

import mongoose from "mongoose";

interface Url {
  orginalUrl: string;
  shortId: string;
}

const UrlSchema = new mongoose.Schema<Url>({
  orginalUrl: {
    type: String,
    required: true,
  },

  shortId: {
    type: String,
    required: true,
    unique: true,
  },
});

const URLS = mongoose.models.URLS || mongoose.model<Url>("URLS", UrlSchema);

export { URLS };

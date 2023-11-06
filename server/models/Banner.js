import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema(
  {
    bannerImg: {
      type:String
      
    },
    pages: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Banner", BannerSchema);
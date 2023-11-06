import mongoose from "mongoose";

const NewsInfoSchema = new mongoose.Schema(
  {
    newsTitle: {
      type: String,
      required: true,
      unique: true,
    },
    dateNews: {
      type: String,
    },
    locationNews: {
      type: String,
    },
    newsInfo: {
        type: String,
    },
    newsStream: {
        type: String,
    },
    tags: {
      type: String,
    },
    newsImg: {
      type:String
      
    },
    timeNews: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("NewsInfo", NewsInfoSchema);
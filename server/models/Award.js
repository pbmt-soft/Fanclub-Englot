import mongoose from "mongoose";

const AwardSchema = new mongoose.Schema(
  {
    awardImg: {
      type: String
      
    },
    awardName: {
        type: String,
      },
      awardType: {
        type: String,
      },
    artistName: {
        type: String,
      },
    category: {
      type: String,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Award", AwardSchema);
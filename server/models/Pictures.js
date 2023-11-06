import mongoose from "mongoose";

const PicturesSchema = new mongoose.Schema(
  {
    pictureImg: {
      type:String
      
    },
    artist: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PicturesOf", PicturesSchema);
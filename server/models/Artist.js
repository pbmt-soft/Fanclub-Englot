import mongoose from "mongoose";

const ArtistsSchema = new mongoose.Schema(
  { 
    name: {
    type: String,
    required: true,
    },

    imageUrl: {
      type:String 
    },
    twitter: {
        type:String 
    },
    instagram: {
        type:String 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Artists", ArtistsSchema);
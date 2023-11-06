import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema(
  { 
    name: {
    type: String,
    required: true,
    },

    imageUrl: {
      type:String 
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Albums", AlbumSchema);
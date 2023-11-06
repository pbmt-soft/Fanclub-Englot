import mongoose from "mongoose";

const SongsSchema = new mongoose.Schema(
  { 
    songName: {
    type: String,
    required: true,
    },

    imageUrl: {
      type:String ,
    },
    songUrl: {
        type:String ,
      },
    albumName: {
        type:String 
    },
    artistName: {
        type:String 
    },
    language: {
        type:String 
      },
    category: {
        type:String 
    },
    lyrics: {
        type:String 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Songs", SongsSchema);
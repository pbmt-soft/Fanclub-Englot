import mongoose from "mongoose";

const VideosSchema = new mongoose.Schema(
  { 
    title: {
    type: String,
    required: true,
    },
    videoUrl: {
        type:String ,
      },
   
    source: {
        type:String 
    },
    description: {
        type:String 
      },
    category: {
        type:String 
    },
  
  },
  { timestamps: true }
);

export default mongoose.model("Videos", VideosSchema);
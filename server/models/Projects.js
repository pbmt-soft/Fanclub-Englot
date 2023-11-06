import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
  { 
    projectTitle: {
    type: String,
    required: true,
    },

    imageUrl: {
      type:String 
    },
    description: {
        type:String 
      },
      artistName: {
        type:String 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Projects", ProjectsSchema);
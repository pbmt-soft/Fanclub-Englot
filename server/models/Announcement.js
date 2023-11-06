import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
   
    info: {
        type: String,
    },
  
    tags: {
      type: String,
    },
    announceImg: {
      type: String
      
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", AnnouncementSchema);
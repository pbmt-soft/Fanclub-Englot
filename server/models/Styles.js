import mongoose from "mongoose";

const StylesSchema = new mongoose.Schema(
  {
    stylesImg: {
      type:String
      
    },
    artist: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Styles", StylesSchema);
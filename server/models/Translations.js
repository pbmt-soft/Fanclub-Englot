import mongoose from "mongoose";

const TranslationSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
   
    translationPostedOn: {
        type: String,
    },
  
    translationPostedOf: {
      type: String,
  },

    tags: {
      type: String,
    },
    translationsImg: {
      type:  String
      
    },
    datePost: {
        type: String,
    },
    timePost: {
        type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Translations", TranslationSchema);
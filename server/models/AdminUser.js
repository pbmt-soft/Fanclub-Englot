import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    profileImg: {
      type: String
      
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminUser", AdminSchema);
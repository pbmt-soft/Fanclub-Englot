import mongoose from "mongoose";
import moment from "moment";

const ScheduleSchema = new mongoose.Schema(
  {
  
    label: {
      type: String,
      required: true
  },
  dateStart: {
      type: Date,
      required: true
  },
  dateEnd: {
      type: Date,
      required: true
  },
  allDay:{
    type:Boolean,
  } ,
  description:{
    type:String
  },
  status:{
    type:String,
  } ,
  backgroundColor:{
    type:String,
  },
  artist: {
   type: String,
  },
  image: {
    type: String,
  },
  },
  { timestamps: true }
);

export default mongoose.model("Schedules", ScheduleSchema);
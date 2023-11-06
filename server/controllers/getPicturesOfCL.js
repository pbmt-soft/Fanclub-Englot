import Pictures from "../models/Pictures.js";

export const getPicturesOfCharlotte= async(req,res,next)=>{
    try {
        const pictures=await Pictures.find({artist:"Charlotte"}).sort({createdAt:-1})
        res.status(200).json(pictures);
    } catch (error) {
      next(error);
    }
  }
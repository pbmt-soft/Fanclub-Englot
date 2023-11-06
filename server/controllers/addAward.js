import Award from '../models/Award.js';

export const addAward = (req, res) =>{
   const award= new  Award({
    awardImg: req.body.awardImg, 
   awardName:req.body.awardName,
   awardType:req.body.awardType,
   artistName:req.body.artistName,
   category:req.body.category,
  });
   award.save()
    .then(result=> res.json({
      message:"Award uploaded successfully",
      awardCreated:{
        _id:result._id,
        awardImg:result.awardImg,
        awardType:result.awardType,
        awardName:result.awardName,
        artistName:result.artistName,
        category:result.category
      }
    } ))
    .catch(err=> console.log(err));
};
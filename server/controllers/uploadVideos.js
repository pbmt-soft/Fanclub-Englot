import videos from '../models/Videos.js';

export const uploadVideos= async  (req,res) => {
    const newVideo=videos(
        {
            title:req.body.title,
            description: req.body.description,
            source: req.body.source,
            videoUrl:req.body.videoUrl,
            category:req.body.category,
           
        }
    );
     await newVideo.save().then(result=> res.json({
        message:"Video posted successfully",
        videosCreated:{
          _id:result._id,
          title:result.title,
          description: result.description,
          source: result.source,
          videoUrl:result.videoUrl,
          category:result.category,
          
        }
      } ))
      .catch(err=> console.log(err));
    
}
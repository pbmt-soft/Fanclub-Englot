import videos from '../models/Videos.js';
import {ObjectId} from "mongodb";

export const getAllVideos= async(req,res, next)=>{

    try {
    const data= await videos.find({});

    res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};

export const getOneVideo=async(req,res,next)=>{
  
  try {
    const projectId = req.params.id; // Assuming you're using a route parameter

    // Ensure the projectId is a valid ObjectId
    if (!ObjectId.isValid(projectId)) {
      return res.status(400).json({ message: 'Invalid projectId' });
    }

    const data = await videos.findOne({ _id: new ObjectId(projectId) });

    if (!data) {
      return res.status(404).json({ message: 'Video not found' });
    }
    // Ensure that the data object contains a valid _id property before accessing it
    if (data._id) {
      res.status(200).json(data);
    } else {
      return res.status(500).json({ message: 'Invalid data' });
    }
  } catch (err) {
    next(err);
  }
};

export const updateVideo=async(req,res)=>{
  const filter={_id: new  ObjectId(req.params.id)};
  const option={
      upsert:true,
      new:true,
  };

  try {
    const result =  await videos.findByIdAndUpdate(filter,
      {
        title:req.body.title,
        description: req.body.description,
        source: req.body.source,
        videoUrl:req.body.videoUrl,
        category:req.body.category,
      },option
      );
    return res.status(200).send({success:true , data:result});
  } catch (error) {
      return res.status(400).send({success:false , msg:error});
  }
};

export const deleteVideo = async (req, res) => {
try {
  const projectId = req.params.id;

  // Logging the received projectId
  console.log('Received projectId:', projectId);

  if (!ObjectId.isValid(projectId)) {
    return res.status(400).json({ error: 'Invalid ObjectId' });
  }
  const filter = { _id: new ObjectId(projectId) }; // Replace with the correct ObjectId

  const result = await videos.deleteOne(filter);

  // Continue with the deletion process
 

  if (result.deletedCount > 0) {
    return res.status(200).send({ success: true, msg: 'Data deleted successfully' });
  } else {
    return res.status(400).send({ success: false, msg: 'Data not found' });
  }
} catch (error) {
  console.error('Error in deleteProject:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};
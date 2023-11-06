import album from '../models/Album.js';
import {ObjectId} from "mongodb";

export const getAllAlbum= async(req,res)=>{
    const options={
        sort:{
            createdAt: 1,
        },
    };
    try{
    const data= await album.find({}).sort({createdAt: 1});

    res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};

export const getOneAlbum=async(req,res,next)=>{
  
    try {
      const projectId = req.params.id; // Assuming you're using a route parameter
  
      // Ensure the projectId is a valid ObjectId
      if (!ObjectId.isValid(projectId)) {
        return res.status(400).json({ message: 'Invalid projectId' });
      }
  
      const data = await album.findOne({ _id: new ObjectId(projectId) });
  
      if (!data) {
        return res.status(404).json({ message: 'Album not found' });
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

  export const updateAlbum =async(req,res)=>{
    const filter={_id: new  ObjectId(req.params.id)};
    const option={
        upsert:true,
        new:true,
    };

    try {
      const result =  await album.findByIdAndUpdate(filter,
        {
            name: req.body.name,
            imageUrl:req.body.imageUrl,
        },option
        );
      return res.status(200).send({success:true , data:result});
    } catch (error) {
        return res.status(400).send({success:false , msg:error});
    }
};

export const deleteAlbum = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Logging the received projectId
    console.log('Received projectId:', projectId);

    if (!ObjectId.isValid(projectId)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    const filter = { _id: new ObjectId(projectId) }; // Replace with the correct ObjectId

    const result = await album.deleteOne(filter);

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

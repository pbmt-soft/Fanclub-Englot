import NewsInfo from "../models/NewsInfo.js";
import {ObjectId} from "mongodb";

export const getNews = async (req, res, next) => {
    try {
      const newsinfo = await NewsInfo.find({}).sort({createdAt:-1});
      res.status(200).json(newsinfo);
    } catch (err) {
      next(err);
    }
  };

  export const getNewsPerPage=async (req, res) => {
    try {
      let query = NewsInfo.find().sort({createdAt:-1});
  
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * pageSize;
      const total = await NewsInfo.countDocuments();
  
      const pages = Math.ceil(total / pageSize);
  
      query = query.skip(skip).limit(pageSize);
  
      if (page > pages) {
        return res.status(404).json({
          status: "fail",
          message: "No page found",
        });
      }
  
      const result = await query;
  
      res.status(200).json({
        status: "success",
        count: result.length,
        page,
        pages,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
    }
  };

  
  export const getOneNews=async(req,res,next)=>{
  
    try {
      const projectId = req.params.id; // Assuming you're using a route parameter
  
      // Ensure the projectId is a valid ObjectId
      if (!ObjectId.isValid(projectId)) {
        return res.status(400).json({ message: 'Invalid projectId' });
      }
  
      const data = await NewsInfo.findOne({ _id: new ObjectId(projectId) });
  
      if (!data) {
        return res.status(404).json({ message: 'News not found' });
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

  export const updateNews =async(req,res)=>{
    const filter={_id: new  ObjectId(req.params.id)};
    const option={
        upsert:true,
        new:true,
    };

    try {
      const result =  await NewsInfo.findByIdAndUpdate(filter,
        {
          newsImg:req.body.newsImg, 
          newsTitle:req.body.newsTitle,
          dateNews:req.body.dateNews,
          locationNews:req.body.locationNews,
          newsInfo:req.body.newsInfo,
          newsStream:req.body.newsStream,
          tags:req.body.tags,
          timeNews:req.body.timeNews,
        },option
        );
      return res.status(200).send({success:true , data:result});
    } catch (error) {
        return res.status(400).send({success:false , msg:error});
    }
};

export const deleteNews = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Logging the received projectId
    console.log('Received projectId:', projectId);

    if (!ObjectId.isValid(projectId)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    const filter = { _id: new ObjectId(projectId) }; // Replace with the correct ObjectId

    const result = await NewsInfo.deleteOne(filter);

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
  
  
import projects from '../models/Projects.js'
import {ObjectId} from "mongodb";

export const getProjects=async(req,res)=>{
    const options={
        sort:{
            createdAt: 1,
        },
    };
    try{
    const data= await projects.find({}).sort({createdAt:-1});

    res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};

export const getProjectPerPageEF=async (req, res) => {
    try {
      let query = projects.find({artistName:"Engfa"}).sort({createdAt:-1});
  
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * pageSize;
      const total = await projects.countDocuments();
  
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
  
  export const getProjectPerPageCL=async (req, res) => {
    try {
      let query = projects.find({artistName:"Charlotte"}).sort({createdAt:-1});
  
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * pageSize;
      const total = await projects.countDocuments();
  
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
  
  export const getOneProject=async(req,res,next)=>{
  
    try {
      const projectId = req.params.id; // Assuming you're using a route parameter
  
      // Ensure the projectId is a valid ObjectId
      if (!ObjectId.isValid(projectId)) {
        return res.status(400).json({ message: 'Invalid projectId' });
      }
  
      const data = await projects.findOne({ _id: new ObjectId(projectId) });
  
      if (!data) {
        return res.status(404).json({ message: 'Project not found' });
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
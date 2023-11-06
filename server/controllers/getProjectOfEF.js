import projects from '../models/Projects.js'

export const getProjectsOfEngfa=async(req,res)=>{
    const options={
        sort:{
            createdAt: 1,
        },
    };
    try{
    const data= await projects.find({artistName:"Engfa"}).sort({createdAt:-1});

    res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
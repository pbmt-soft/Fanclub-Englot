import projects from '../models/Projects.js'
import {ObjectId} from "mongodb";

export const updateProject =async(req,res)=>{
    const filter={_id: new  ObjectId(req.params.id)};
    const option={
        upsert:true,
        new:true,
    };

    try {
      const result =  await projects.findByIdAndUpdate(filter,
        {
            imageUrl: req.body.imageUrl, 
            projectTitle:req.body.projectTitle,
            description:req.body.description,
            artistName: req.body.artistName,
        },option
        );
      return res.status(200).send({success:true , data:result});
    } catch (error) {
        return res.status(400).send({success:false , msg:error});
    }
};

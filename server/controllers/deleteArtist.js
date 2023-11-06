import artist from '../models/Artist.js';
import {ObjectId} from "mongodb";

export const deleteArtist= async(req,res)=>{
    const filter={ _id: new  ObjectId(req.params.id) };
    
    const result= await artist.deleteOne(filter);

    if(result){
        return res.status(200).send({success:true , msg:"Data deleted successfully"});
    }else{
        return res.status(400).send({success:false , msg:"Data not found"});
    }

};
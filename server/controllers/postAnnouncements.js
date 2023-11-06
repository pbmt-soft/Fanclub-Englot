import Announcements from '../models/Announcement.js';


export const postAnnouncements = (req, res) =>{
    const announcement= new  Announcements({
    announceImg: req.body.announceImg, 
    title:req.body.title,
    info:req.body.info,
    tags:req.body.tags,
   });
   announcement.save()
     .then(result=> res.json({
       message:"Announcement posted successfully",
       announcementsCreated:{
         _id:result._id,
         announceImg:result.announceImg,
         title:result.title,
         info:result.info,
         tags:result.tags,
       }
     } ))
     .catch(err=> console.log(err));
 }
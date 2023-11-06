import Translations from '../models/Translations.js';

export const postTranslations = (req, res) =>{
    const translation= new  Translations({
    translationsImg:req.body.translationsImg, 
    description:req.body.description,
    translationPostedOn:req.body.translationPostedOn,
    translationPostedOf:req.body.translationPostedOf,
    tags:req.body.tags,
    datePost:req.body.datePost,
    timePost:req.body.timePost,
   });
   translation.save()
     .then(result=> res.json({
       message:"Translations posted successfully",
       translationsCreated:{
         _id:result._id,
         translationsImg:result.translationsImg,
         description:result.description,
         translationPostedOn:result.translationPostedOn,
         translationPostedOf:result.translationPostedOf,
         tags:result.tags,
         datePost:result.datePost,
         timePost:result.timePost,
       }
     } ))
     .catch(err=> console.log(err));
 }
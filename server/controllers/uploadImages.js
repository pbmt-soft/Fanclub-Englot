import Pictures from '../models/Pictures.js';

export const uploadImages = (req, res) =>{
     const pictures= new  Pictures({pictureImg: req.body.pictureImg, artist:req.body.artist,});
     pictures.save()
      .then(result=> res.json({
        message:"Pictures of uploaded successfully",
        stylesCreated:{
          _id:result._id,
          pictureImg:result.pictureImg,
          artist:result.artist
        }
      } ))
      .catch(err=> console.log(err));
  }
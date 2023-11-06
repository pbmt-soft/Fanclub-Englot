import Styles from '../models/Styles.js';

export const uploadPictures = (req, res) =>{
     const styles= new  Styles({stylesImg: req.body.stylesImg, artist:req.body.artist,});
     styles.save()
      .then(result=> res.json({
        message:"Styles Pictures uploaded successfully",
        stylesCreated:{
          _id:result._id,
          stylesImg:result.stylesImg,
          artist:result.artist
        }
      } ))
      .catch(err=> console.log(err));
  }

  
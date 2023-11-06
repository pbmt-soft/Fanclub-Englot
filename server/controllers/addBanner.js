import Banner from '../models/Banner.js';

export const addBanner = (req, res) =>{
     const banner= new  Banner({bannerImg: req.body.bannerImg, pages:req.body.pages,});
     banner.save()
      .then(result=> res.json({
        message:"Banner uploaded successfully",
        bannerCreated:{
          _id:result._id,
          bannerImg:result.bannerImg,
          pages:result.pages
        }
      } ))
      .catch(err=> console.log(err));
  }
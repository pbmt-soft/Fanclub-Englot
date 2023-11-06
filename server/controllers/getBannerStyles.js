import Banner from "../models/Banner.js";



export const getBannerStyles = async (req, res, next) => {
    try {
      const banner = await Banner.find({pages:"Styles"});
      res.status(200).json(banner);
    } catch (err) {
      next(err);
    }
  };
  
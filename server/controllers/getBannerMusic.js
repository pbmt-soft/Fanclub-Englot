import Banner from "../models/Banner.js";



export const getBannerMusic = async (req, res, next) => {
    try {
      const banner = await Banner.find({pages:"Videos & Musics"});
      res.status(200).json(banner);
    } catch (err) {
      next(err);
    }
  };
  
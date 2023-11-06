import Banner from "../models/Banner.js";



export const getBannerNews = async (req, res, next) => {
    try {
      const banner = await Banner.find({pages:"News & Announcements"});
      res.status(200).json(banner);
    } catch (err) {
      next(err);
    }
  };
  
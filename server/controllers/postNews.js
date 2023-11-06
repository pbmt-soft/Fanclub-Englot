import NewsInfo from '../models/NewsInfo.js';

export const postNews = (req, res) =>{
     const newsinfo= new  NewsInfo({
      newsImg:req.body.newsImg, 
     newsTitle:req.body.newsTitle,
     dateNews:req.body.dateNews,
     locationNews:req.body.locationNews,
     newsInfo:req.body.newsInfo,
     newsStream:req.body.newsStream,
     tags:req.body.tags,
     timeNews:req.body.timeNews,
    });
     newsinfo.save()
      .then(result=> res.json({
        message:"News posted successfully",
        newsCreated:{
          _id:result._id,
          newsImg:result.newsImg,
          newsTitle:result.newsTitle,
          dateNews:result.dateNews,
          locationNews:result.locationNews,
          newsInfo:result.newsInfo,
          newsStream:result.newsStream,
          tags:result.tags,
          timeNews:result.timeNews,
        }
      } ))
      .catch(err=> console.log(err));
  }
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from 'morgan';
import { login } from './controllers/login.js'
import { getAdminUser } from "./controllers/admin.js";
import { deleteAnnouncement, getAnnouncement, getAnnouncementPerPage, getOneAnnouncement, updateAnnouncement } from "./controllers/announcements.js";
import { deleteTranslation, getOneTranslation, getTranslations, getTranslationsPerPage, updateTranslation } from "./controllers/translations.js";
import { deleteBanner, getBanner, getOneBanner, updateBanner } from "./controllers/banner.js";
import { deleteAward, getAward, getOneAward, updateAward } from "./controllers/award.js";
import { deleteNews, getNews, getNewsPerPage, getOneNews, updateNews } from "./controllers/news.js";
import { deleteStyle, getOneStyle, getStyles, getStylesPerPage, updateStyle } from "./controllers/styles.js";
import { getPicturesOfEngfa } from "./controllers/getPicturesOfEF.js";
import { getPicturesOfCharlotte } from "./controllers/getPicturesOfCL.js";
import { getPicturePerPageEF,getPicturePerPageCL, getPictures, updatePicture, deletePicture, getOnePicture} from "./controllers/pictures.js";
import { getAllSong, getOneSong, updateSong } from "./controllers/allSongs.js";
import { getAllAlbum, getOneAlbum, updateAlbum } from "./controllers/allAlbums.js";
import { getAllArtist, getOneArtist, updateArtist } from "./controllers/allArtists.js";
import { uploadPictures } from "./controllers/uploadPictures.js";
import { uploadImages } from "./controllers/uploadImages.js";
import { addAlbums } from "./controllers/addAlbum.js";
import { addArtists } from "./controllers/addArtists.js";
import { addSongs } from "./controllers/addSongs.js";
import { addAdmin } from "./controllers/addAdmin.js";
import { addAward } from "./controllers/addAward.js";
import { addBanner } from "./controllers/addBanner.js";
import { postNews } from "./controllers/postNews.js";
import { postAnnouncements } from "./controllers/postAnnouncements.js";
import { postTranslations } from "./controllers/postTranslation.js";
import { deleteArtist } from "./controllers/deleteArtist.js";
import { deleteAlbum } from "./controllers/deleteAlbum.js";
import { deleteSong } from "./controllers/deleteSong.js";
import { update } from "./controllers/profile.js";
import { addProject } from './controllers/addProject.js';
import { deleteProject } from './controllers/deleteProject.js';
import { getProjectPerPageEF,getProjectPerPageCL, getProjects, getOneProject } from './controllers/projects.js';
import { updateProject } from './controllers/updateProject.js'
import { deleteVideo, getAllVideos, getOneVideo, updateVideo } from "./controllers/allVideos.js";
import { uploadVideos } from "./controllers/uploadVideos.js";
import { createSchedule } from "./controllers/createSchedule.js";
import { getSchedules } from "./controllers/schedule.js";
import { getProjectsOfCharlotte } from "./controllers/getProjectOfCL.js";
import { getProjectsOfEngfa } from "./controllers/getProjectOfEF.js";
import { getBannerStyles } from "./controllers/getBannerStyles.js";
import { getBannerMusic } from "./controllers/getBannerMusic.js";
import { getBannerNews } from "./controllers/getBannerNews.js";
import { registerUsers } from "./controllers/registerUser.js";
import { loginUsers } from "./controllers/loginUser.js";
import { verifyUser } from "./middleware/verifyUser.js";
import  Auth  from "./middleware/auth.js";
import { getUser } from "./controllers/getUsers.js";
import { updateUser } from "./controllers/updateUser.js";
import { localVariables } from "./middleware/localVariables.js";
import { generateOTP } from "./controllers/generateOTP.js";
import { verifyOTP } from "./controllers/verifyOTP.js";
import { createResetSession } from "./controllers/createResetSession.js";
import { resetPassword } from "./controllers/resetPassword.js";
import { registerMail } from "./controllers/mailer.js";
import { getAllUsers } from "./controllers/users.js";
import { updateSchedule } from "./controllers/updateSchedule.js";
import { deleteSchedule } from "./controllers/deleteSchedule.js";
import { getOneSchedule } from "./controllers/getSchedule.js";

const app =express();
dotenv.config()

app.use(cors());
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack




const connect = ()=> {
    mongoose.connect(process.env.MONGO).then(()=>{
      console.log("connected to DB");
    }).catch((err)=>{
      throw err;
    });
  };
  //get
  app.get("/admin", getAdminUser);
  app.get("/announcements", getAnnouncement);
  app.get("/banner", getBanner);
  app.get("/award", getAward);
  app.get("/news", getNews);
  app.get("/translations", getTranslations);
  app.get("/styles", getStyles);
  app.get("/pictures", getPictures);
  app.get("/pictureOfCL", getPicturesOfCharlotte);
  app.get("/pictureOfEF", getPicturesOfEngfa);
  app.get("/allSongs",getAllSong);
  app.get("/allAlbums", getAllAlbum);
  app.get("/allArtists",getAllArtist);
  app.get("/allVideos",getAllVideos);
  app.get("/projects",getProjects);
  app.get("/projectOfCL",getProjectsOfCharlotte);
  app.get("/projectOfEF",getProjectsOfEngfa);
  app.get("/schedule",getSchedules);
  app.get("/getSchedule/:id",getOneSchedule);
  app.get("/carouselStyles",getBannerStyles);
  app.get("/carouselMusic",getBannerMusic);
  app.get("/carouselNews",getBannerNews);
  app.get("/getUsers/:username",getUser);
  app.get("/generateOTP",verifyUser,localVariables,generateOTP);
  app.get("/verifyOTP",verifyOTP);
  app.get("/createResetSession",createResetSession);
  app.get("/users",getAllUsers);
  app.get("/getAnnouncementPage",getAnnouncementPerPage);
  app.get("/getNewsPage",getNewsPerPage);
  app.get("/getStylesPage",getStylesPerPage);
  app.get("/getProjectPageEF",getProjectPerPageEF);
  app.get("/getPicturePageEF",getPicturePerPageEF);
  app.get("/getProjectPageCL",getProjectPerPageCL);
  app.get("/getPicturePageCL",getPicturePerPageCL);
  app.get("/getTranslationPage",getTranslationsPerPage);
  app.get("/getProject/:id",getOneProject);
  app.get("/getBanner/:id",getOneBanner);
  app.get("/getOneAward/:id",getOneAward);
  app.get("/getNews/:id",getOneNews);
  app.get("/getAnnounce/:id",getOneAnnouncement);
  app.get("/getStyle/:id",getOneStyle);
  app.get("/getTranslation/:id",getOneTranslation);
  app.get("/getVideo/:id",getOneVideo);
  app.get("/getPicture/:id",getOnePicture);
  app.get("/getAlbum/:id",getOneAlbum);
  app.get("/getArtist/:id",getOneArtist);
  app.get("/getSong/:id",getOneSong);

  //post
  app.post('/login',login);
  app.post('/postAnnouncements',postAnnouncements);
  app.post('/addAdmin',addAdmin);
  app.post('/addAward',addAward);
  app.post('/addBanner',addBanner);
  app.post('/postNews',postNews);
  app.post('/postTranslations',postTranslations);
  app.post('/uploadPictures',uploadPictures);
  app.post('/uploadImages',uploadImages);
  app.post('/addSongs',addSongs);
  app.post('/addAlbums',addAlbums);
  app.post('/addArtists',addArtists);
  app.post('/addProject',addProject);
  app.post('/uploadVideos',uploadVideos);
  app.post('/createSchedule',createSchedule);
  app.post('/registerUser',registerUsers);
  app.post('/loginUser',verifyUser,loginUsers);
  app.post("/authenticate",verifyUser,(req,res) => res.end());
  app.post("/registerMail",registerMail);

  //delete
  app.delete('/deleteArtist/:id' , deleteArtist);
  app.delete('/deleteAlbum/:id', deleteAlbum);
  app.delete('/deleteSong/:id',deleteSong);
  app.delete('/deleteProject/:id',deleteProject);
  app.delete('/deleteSchedule/:id',deleteSchedule);
  app.delete('/deleteBanner/:id',deleteBanner);
  app.delete('/deleteAward/:id',deleteAward);
  app.delete('/deleteNews/:id',deleteNews);
  app.delete('/deleteAnnouncement/:id',deleteAnnouncement);
  app.delete('/deleteStyle/:id',deleteStyle);
  app.delete('/deleteTranslation/:id',deleteTranslation);
  app.delete('/deleteVideo/:id',deleteVideo);
  app.delete('/deletePicture/:id',deletePicture);


  //update
  app.put('/profile/:id', update);
  app.put('/updateProject/:id', updateProject);
  app.put('/updateUser',Auth,updateUser);
  app.put('/resetPassword',verifyUser,resetPassword);
  app.put('/updateSchedule',updateSchedule);
  app.put('/updateBanner/:id',updateBanner);
  app.put('/updateAward/:id',updateAward);
  app.put('/updateNews/:id',updateNews);
  app.put('/updateAnnouncement/:id',updateAnnouncement);
  app.put('/updateStyle/:id',updateStyle);
  app.put('/updateTranslation/:id',updateTranslation);
  app.put('/updateVideo/:id',updateVideo);
  app.put('/updatePicture/:id',updatePicture);
  app.put('/updateAlbum/:id',updateAlbum);
  app.put('/updateArtist/:id',updateArtist);
  app.put('/updateSong/:id',updateSong);

  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

  
  app.listen(5000,()=>{
    connect();
  console.log("connected to SERVER");
  });
import album from '../models/Album.js';



export const addAlbums = async (req,res) => {
    const newAlbum=album(
        {
            name: req.body.name,
            imageUrl:req.body.imageUrl,
           
        }
    );
    
     await newAlbum.save().then(result=> res.json({
        message:"Album posted successfully",
        albumsCreated:{
          _id:result._id,
          name: result.name,
          imageUrl:result.imageUrl,
        }
      } ))
      .catch(err=> console.log(err));
    
};
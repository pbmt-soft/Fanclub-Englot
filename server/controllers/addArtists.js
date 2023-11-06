import artist from '../models/Artist.js';

export const addArtists=async (req,res) => {
    const newArtist=artist(
        {
            name: req.body.name,
            imageUrl:req.body.imageUrl,
            twitter:req.body.twitter,
            instagram:req.body.instagram,
        }
    );
       await newArtist.save().then(result=> res.json({
        message:"Artist posted successfully",
        artistsCreated:{
          _id:result._id,
          name: result.name,
            imageUrl:result.imageUrl,
            twitter:result.twitter,
            instagram:result.instagram,
        }
      } ))
      .catch(err=> console.log(err));
    
}
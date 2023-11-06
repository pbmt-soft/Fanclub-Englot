import song from '../models/Songs.js';

export const addSongs= async  (req,res) => {
    const newSong=song(
        {
            songName:req.body.songName,
            artistName: req.body.artistName,
            albumName: req.body.albumName,
            imageUrl:req.body.imageUrl,
            songUrl:req.body.songUrl,
            language:req.body.language,
            category:req.body.category,
            lyrics:req.body.lyrics,
        }
    );
     await newSong.save().then(result=> res.json({
        message:"Song posted successfully",
        songsCreated:{
          _id:result._id,
          songName:result.songName,
          artistName: result.artistName,
          albumName: result.albumName,
          imageUrl:result.imageUrl,
          songUrl:result.songUrl,
          language:result.language,
          category:result.category,
          lyrics:result.lyrics,
        }
      } ))
      .catch(err=> console.log(err));
    
}
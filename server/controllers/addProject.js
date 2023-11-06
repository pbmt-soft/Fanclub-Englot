import projects from '../models/Projects.js'


export const addProject = (req, res) =>{
    const project= new  projects({
     imageUrl: req.body.imageUrl, 
    projectTitle:req.body.projectTitle,
    description:req.body.description,
    artistName: req.body.artistName,
   });
    project.save()
     .then(result=> res.json({
       message:"Projects uploaded successfully",
       projectsCreated:{
         _id:result._id,
         imageUrl:result.imageUrl,
         description:result.description,
         projectTitle:result.projectTitle,
         artistName: result.artistName,
       }
     } ))
     .catch(err=> console.log(err));
 };
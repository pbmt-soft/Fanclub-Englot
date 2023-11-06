import projects from '../models/Projects.js'
import {ObjectId} from "mongodb";

export const deleteProject = async (req, res) => {
    try {
      const projectId = req.params.id;
  
      // Logging the received projectId
      console.log('Received projectId:', projectId);
  
      if (!ObjectId.isValid(projectId)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
      }
      const filter = { _id: new ObjectId(projectId) }; // Replace with the correct ObjectId

      const result = await projects.deleteOne(filter);
  
      // Continue with the deletion process
     
  
      if (result.deletedCount > 0) {
        return res.status(200).send({ success: true, msg: 'Data deleted successfully' });
      } else {
        return res.status(400).send({ success: false, msg: 'Data not found' });
      }
    } catch (error) {
      console.error('Error in deleteProject:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
    
    
    
    
    
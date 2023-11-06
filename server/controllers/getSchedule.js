import Schedule from '../models/Schedules.js'
import  handleEventErrors from "../utils/eventErrors.js"

export const getOneSchedule = async (req, res) =>{
    const id =   req.params.id
    const event = await Schedule.findById(id).lean();
 
    try{
       res.status(200).json(event)

      
    }catch(err){
        handleEventErrors(err, res)
    }
}
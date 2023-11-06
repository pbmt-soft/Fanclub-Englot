import Schedule from '../models/Schedules.js'
import  handleEventErrors from "../utils/eventErrors.js"


export const deleteSchedule =async(req, res)=>{
    const id = req.params.id;
    try{
        await Schedule.findByIdAndDelete(id)
        res.status(200).json("Event has been deleted");
    }catch(err){
        handleEventErrors(err, res)
    }

}

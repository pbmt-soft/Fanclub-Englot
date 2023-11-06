import Schedule from '../models/Schedules.js'
import  handleEventErrors from "../utils/eventErrors.js"

export const updateSchedule = async (req, res)=>{
    const { _id, label, dateStart, dateEnd, allDay, description, status, backgroundColor,artist} = req.body;

    try {
        
        const ev = await Schedule.findByIdAndUpdate(
            _id,
            {
                label: label || '',
                dateStart,
                dateEnd,
                allDay: allDay || false,
                description: description || '',
                status: status || '',
                backgroundColor: backgroundColor || '',
                artist:artist || '',
                
            },
            {
                runValidators: true
            }
        )
        console.log(ev);
        res.json({ _id, label, dateStart, dateEnd, allDay, description, status, backgroundColor,artist })

    } catch (err) {

        console.log(err);
        res.status(400).json({ error: `Failed to update the event with id ${id}` })

    }

    }
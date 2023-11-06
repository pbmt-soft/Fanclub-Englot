import Schedule from '../models/Schedules.js';
import handleEventErrors from '../utils/eventErrors.js';

export const createSchedule = async (req, res) => {
  try {
    const schedules = new Schedule({
      label: req.body.label,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      allDay: req.body.allDay,
      status: req.body.status,
      backgroundColor: req.body.backgroundColor,
      artist: req.body.artist,
      description: req.body.description,
      image: req.body.image,
    });

    const result = await schedules.save();

    res.json({
      message: 'Schedule uploaded successfully',
      scheduleCreated: {
        _id: result._id,
        label: result.label,
        dateStart: result.dateStart,
        dateEnd: result.dateEnd,
        allDay: result.allDay,
        status: result.status,
        backgroundColor: result.backgroundColor,
        artist: result.artist,
        description: result.description,
        image: result.image,
      },
    });
  } catch (err) {
    handleEventErrors(err, res);
  }
};

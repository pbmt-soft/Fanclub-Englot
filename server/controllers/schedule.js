import Schedule from '../models/Schedules.js'


export const getSchedules = async (req, res, next) => {
    try {
      const schedules = await Schedule.find({}).lean();
      res.status(200).json(schedules);
    } catch (err) {
      next(err);
    }
  };
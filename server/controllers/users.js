import Users from "../models/Users.js";



export const getAllUsers = async (req, res, next) => {
    try {
      const user = await Users.find({});
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  
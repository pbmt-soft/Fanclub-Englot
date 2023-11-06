import AdminUser from "../models/AdminUser.js"


export const getAdminUser = async (req, res, next) => {
    try {
      const adminuser = await AdminUser.find({});
      res.status(200).json(adminuser);
    } catch (err) {
      next(err);
    }
  };
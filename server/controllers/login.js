import AdminUser from "../models/AdminUser.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


export const login = async (req, res, next) => {
    try {
      const adminuser = await AdminUser.findOne({ email: req.body.email});
      if (!adminuser) return next(createError(404, "User not found!"));
  
      const isCorrect = await bcrypt.compare(req.body.password, adminuser.password);
  
      if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
  
      const token = jwt.sign({ id: adminuser._id }, `${process.env.JWT}`);
      const { password, ...others } = adminuser._doc;
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(others);
    } catch (err) {
      next(err);
    }
  };
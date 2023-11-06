import bcrypt from "bcryptjs";
import AdminUser from '../models/AdminUser.js';
import jwt from "jsonwebtoken";




export const addAdmin =  async(req, res, next) =>{
    try {
      //upload.single('image');
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new AdminUser({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
          profileImg: req.body.profileImg,
          role: req.body.role,
        });
        const savedAdminUser = await newUser.save();
      const token = jwt.sign({ id: savedAdminUser._id },  `${process.env.JWT}`);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedAdminUser._doc);
    }
   catch (err) {
    next(err);
  }
};
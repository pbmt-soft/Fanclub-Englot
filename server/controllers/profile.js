import { createError } from "../error.js";
import AdminUser from "../models/AdminUser.js"

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        const updatedAdminUser = await AdminUser.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedAdminUser);
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can update only your account!"));
    }
  };
  
import user_models from "../models/user_models.js";
import room_models from "../models/room_models.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await user_models.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const updateUserBooked = async (req, res, next) => {
    try {
      await user_models.updateOne(
        { 
          "users._id": req.params.id,
        },
        {
          $push: {
            "Booked.$.unavaliable": req.body.dates,
          },
        }
      );
      res.status(200).json("user has been updated");
    } catch (err) {
      next(err);
    }
  };
  

export const deleteUser = async (req, res, next) => {
  try {
    await user_models.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await user_models.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getallUser = async (req, res, next) => {
  try {
    const users = await user_models.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const mongoose = require("mongoose");
const Photo = require("../models/Photo");
const User = require("../models/User");

//Insert a photo with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;
  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  //create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  //if photo was created successfully, return data
  if (!newPhoto) {
    res.sendStatus(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
    return;
  }

  res.sendStatus(201).json(newPhoto);
};

//remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    //check if photo exists
    if (!photo) {
      res.sendStatus(404).json({ errors: ["Foto não encontrada!"] });
      return;
    }

    //check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
      res.sendStatus(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
    }

    await Photo.findByIdAndDelete(photo._id);

    res
      .sendStatus(200)
      .json({ id: photo._id, message: "Foto excluida com sucesso!" });
  } catch (error) {
    res.sendStatus(404).json({ errors: ["Foto não encontrada!"] });
    return;
  }
};

//Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

//Gett userr photos
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
};

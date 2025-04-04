const express = require("express");
const Moment = require("../models/moment");
const UserSchema = require("../models/UserSchema");
const router = express.Router();
const mongoose = require("mongoose");
const ValidateMoment = require("../validator/Chessvalidation");

router.use(express.json());

router.post("/moments", ValidateMoment, async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, imageUrl, videoUrl, date, created_by } =
      req.body;

    if (!title || (!imageUrl && !videoUrl)) {
      return res
        .status(400)
        .json({ message: `Title, ImageUrl, VideoUrl is required` });
    }

    const userExist = await UserSchema.findById(created_by);
    if (!userExist) {
      return res.status(404).json({ message: `User not found` });
    }

    const newMoment = new Moment({
      title,
      description,
      imageUrl,
      videoUrl,
      date,
      created_by,
    });
    await newMoment.save();

    res
      .status(201)
      .json({ message: `Created successfully`, moment: newMoment });
  } catch (err) {
    res.status(500).json({ message: `Bad request` });
  }
});

router.get("/moments", async (req, res) => {
  try {
    const moments = await Moment.find();
    res.status(200).json(moments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching moments", error });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await UserSchema.find({}, "name");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: `Name, Email, and Password are required` });
    }

    const newUser = new UserSchema({ name, email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: `User created successfully`, user: newUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/users/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const moments = await Moment.find({ created_by: userId });
        res.status(200).json({moment: moments});
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/moments/:id", async (req, res) => {
  try {
    const idMoment = await Moment.findById(req.params.id);

    if (!idMoment) {
      return res.status(404).json({ message: `Error 404 Moment not found!` });
    }
    res.json(idMoment);
  } catch (err) {
    res.status(400).json({ message: `Bad request`, err });
  }
});

router.put("/moments/:id", async (req, res) => {
  try {
    const { title, description, imageUrl, videoUrl, date } = req.body;

    const updateMoment = await Moment.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl, videoUrl, date },
      { new: true }
    );

    if (!updateMoment) {
      return res.status(404).json({ message: `Moment not found` });
    }

    res
      .status(200)
      .json({ message: `Updated Successfully`, moment: updateMoment });
  } catch (err) {
    return res.status(500).json({ message: `Internal server error` });
  }
});

router.delete("/moments/:id", async (req, res) => {
  try {
    const delMoment = await Moment.findByIdAndDelete(req.params.id);

    if (!delMoment) {
      return res.status(404).json({ message: `Moment not found` });
    }
    res.status(200).json({ message: "Moment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: `Internal server error` });
  }
});

module.exports = router;

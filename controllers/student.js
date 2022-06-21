const mongoose = require("mongoose");
const Students = require("../models/student");

async function post(req, res) {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send("Required fields can't be empty");
    }
    const student = new Students({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      email: email,
    });
    await student.save();

    res.status(200).send({ createdStudent: student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function getAll(req, res) {
  try {
    const students = await Students.find({
      name: "Owais",
    });
    res.status(200).send({ students });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function getSingle(req, res) {
  try {
    const { studentId } = req.params;
    const student = await Students.findById(studentId);
    res.status(200).send({ student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

function update(req, res) {
  const { name } = req.body;
  const { userId } = req.params;

  const result = users[userId];
  if (!result) {
    return res.status(400).send("invalid user id");
  }
  users[userId] = name;
  res.status(200).send({ users });
}

function deleteUser(req, res) {
  const { userId } = req.params;
  const result = users[userId];
  if (!result) {
    return res.status(400).send("invalid user id");
  }
  users.splice(userId, 1);
  res.status(200).send({ users });
}

module.exports = {
  post,
  getAll,
  getSingle,
  update,
  deleteUser,
};

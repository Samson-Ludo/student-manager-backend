const router = require("express").Router();
let { Student } = require("../models/models");

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const name = req.body.name;
  const courses = req.body.courses;

  const newStudent = new Student({
    name,
    courses,
  });

  newStudent
    .save()
    .then(() => res.json(newStudent))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.name = req.body.name;
      student.courses = req.body.courses;

      student
        .save()
        .then(() => res.json(student))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

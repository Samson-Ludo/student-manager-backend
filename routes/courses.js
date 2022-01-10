const router = require("express").Router();
let { Course } = require("../models/models");

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.status(200).json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const name = req.body.name;

  const newCourse = new Course({
    name,
  });

  newCourse
    .save()
    .then(() => res.json(newCourse))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.status(200).json(course))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      course.name = req.body.name;

      course
        .save()
        .then(() => res.status(201).json(course))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

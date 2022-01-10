const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});

const studentSchema = new Schema({
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  name: { type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,},
});

const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Course, Student };

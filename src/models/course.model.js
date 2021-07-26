// activity course  name
// activity course location
// activity course status
// activity course description
// activity course enrollment start date
// activity course enrollment start time
// activity course enrollment end date
// acitivty course enrollment end time
// activity course category
// activity course price

const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Course name is required",
  },
  location: {
    park_name: String,
    park_id: String,
    facitlity_name: String,
    facility_id: String,
  },
  status: String,
  description: {
    type: String,
    trim: true,
  },
  enrollment_start_date: {
    type: Date,
    required: true,
  },
  enrollment_start_time: {
    type: String,
    required: true,
  },
  enrollment_end_date: {
    type: String,
    required: true,
  },
  enrollment_end_time: {
    type: String,
    required: true,
  },
  category: String,
  price: Number,
});
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;

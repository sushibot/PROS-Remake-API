const mongoose = require("mongoose");

const create_course = async (course) => {
  //TODO: add error checking here
  try {
    const Course = mongoose.model("Course");
    const new_course = await Course.create(course);

    return "Course created!";
  } catch (error) {
    return error;
  }
};

module.exports = {
  create_course,
};

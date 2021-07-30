const mongoose = require("mongoose");

const create_course = async (course) => {
  //TODO: add error checking here
  try {
    const Course = mongoose.model("Course");
    const new_course = await Course.create(course);

    return {
      meta: {},
      data: {
        message: "Course succesfully created."
      }
    };
  } catch (error) {
    return error;
  }
};

const get_course = async ({ id }) => {
  try {
    const Course = mongoose.model("Course");
    const course = await Course.findOne({ _id: id });
    return {
      meta: {},
      data: course
    }
  } catch (error) {
    return error;
  }
}

const update_course = async ({ id, course }) => {
  try {
    const Course = mongoose.model("Course");
    await Course.findOneAndUpdate({ _id: id }, course);
    return {
      meta: {},
      data: {
        meta: {},
        data: {
          message: "Course Succesfully updated!"
        }
      }
    }
  } catch (error) {
    return error
  }
}
module.exports = {
  create_course,
  get_course,
  update_course
};

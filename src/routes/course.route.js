const express = require("express");
const router = express.Router();
const course_controller = require("../controllers/course.controller");

router.route("/").post(course_controller.create_course);

module.exports = {
  course_route: router,
};

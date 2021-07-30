const express = require("express");
const router = express.Router();

const { sanitizeBody, validate } = require("../validators/validator");
const course_controller = require("../controllers/course.controller");

router.route("/", sanitizeBody, validate)
  .post(course_controller.create_course)

router.route("/:id", sanitizeBody, validate)
  .get(course_controller.get_one_course)
  .put(course_controller.update_one_course)


module.exports = {
  course_route: router,
};

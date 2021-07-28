const express = require("express");
const router = express.Router();

const { sanitizeBody, validate } = require("../validators/validator");
const course_controller = require("../controllers/course.controller");

router
  .route("/", sanitizeBody, validate)
  .post(course_controller.create_course)
  .get((req, res) => {
    res.json("HEllo world");
  });

module.exports = {
  course_route: router,
};

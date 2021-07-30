const express = require("express");
const router = express.Router();

const { sanitizeBody, validate } = require("../validators/validator");


router.route("/", sanitizeBody, validate)
    .post(course_controller.create_course)


module.exports = {
    class_route: router,
};

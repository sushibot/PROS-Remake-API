const express = require("express");
const mongoose = require("mongoose");
const course_service = require("../services/course.service");
const create_course = async (req = express.request, res = express.response) => {
  try {
    const request = {
      name: req.body.create.name,
      description: req.body.create.description,
      enrollment_start_date: req.body.create.enrollment_start_date,
      enrollment_start_time: req.body.create.enrollment_start_time,
      enrollment_end_date: req.body.create.enrolment_end_date,
      enrollment_end_time: req.body.create.enrollment_end_time,
      location: {
        park_name: req.body.create.location.park_name,
        park_id: req.body.create.location.park_id,
        facility_name: req.body.create.location.facility_name,
        facility_id: req.body.create.location.facility_id,
      },
      price: req.body.create.price,
      status: req.body.create.status,
      category: req.body.create.category,
    };
    const course_create = await course_service.create_course(request);
    return res.json(course_create);
  } catch (error) {
    return error;
  }
};
module.exports = {
  create_course,
};

const express = require("express");
const mongoose = require("mongoose");
const course_service = require("../services/course.service");

const create_course = async (req = express.request, res = express.response) => {
  try {
    const course = {
      name: req.body.create.name,
      description: req.body.create.description,
      enrollment_start_date: req.body.create.enrollment_start_date,
      enrollment_start_time: req.body.create.enrollment_start_time,
      enrollment_end_date: req.body.create.enrollment_end_date,
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
    const course_create = await course_service.create_course(course);
    return res.json(course_create);
  } catch (error) {
    return res.json({
      error,
      message: "There was an error with your request!",
    });
  }
};

const get_one_course = async (req = express.request, res = express.response) => {

  try {
    const id = req.params.id;
    const course = await course_service.get_course({ id })
    return res.json(course)
  }
  catch (error) {
    res.json({
      error,
      message: "There was an error with your request!",
    });
  }
}

const update_one_course = async (req = express.request, res = express.response) => {
  try {
    const id = req.params.id;
    const course = {
      name: req.body.update.name,
      description: req.body.update.description,
      enrollment_start_date: req.body.update.enrollment_start_date,
      enrollment_start_time: req.body.update.enrollment_start_time,
      enrollment_end_date: req.body.update.enrollment_end_date,
      enrollment_end_time: req.body.update.enrollment_end_time,
      location: {
        park_name: req.body.update.location.park_name,
        park_id: req.body.update.location.park_id,
        facility_name: req.body.update.location.facility_name,
        facility_id: req.body.update.location.facility_id,
      },
      price: req.body.update.price,
      status: req.body.update.status,
      category: req.body.update.category,
    };
    const updated_course = await course_service.update_course({ course, id });
    return res.json(updated_course)
  } catch (error) {
    res.json({
      error,
      message: "There was an issue updating."
    })
  }
}

module.exports = {
  create_course,
  get_one_course,
  update_one_course
};

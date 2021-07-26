// activity class start date
// activity class start time
// activity class end date
// activity class end time
// activity class dates [mon, tues, wed, etc..]
// activity class instructor
// activity class name
// activity class age group
// activity class capacity
// activity class waitlist capacity
// activity class seats taken
// activity class seats available
// activity class id
// activity course id
// activity classes required id []
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ClassSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  capacity: {
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
  },
  seats: {
    waitlist: {
      type: Number,
    },
    taken: {
      type: Number,
    },
    available: {
      type: Number,
    },
  },
  course_id: {
    type: String,
    required: true,
  },
  class_prerequisite: {
    type: Array,
    default: [],
  },
  class_start_date: {
    type: Date,
    trim: true,
    required: true,
  },
  class_start_time: {
    type: String,
    trim: true,
    required: true,
  },
  class_end_date: {
    type: Date,
    trim: true,
    required: true,
  },
  class_end_time: {
    type: String,
    trim: true,
    required: true,
  },
  class_dates: {
    type: Array,
    required: true,
    default: [],
  },
  instructor_id: {
    type: String,
    required: true,
  },
});

const Class = mongoose.Schema("Class", ClassSchema);
module.exports = Class;

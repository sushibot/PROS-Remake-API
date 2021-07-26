const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ParkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  capacity: Number,
  parking_capacity: Number,
  amenities: [String],
  last_updated_by: String,
  last_update_date: Date,
  hours: {
    type: Array,
    default: [],
  },
});

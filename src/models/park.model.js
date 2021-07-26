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
  description: {
    type: String,
    trim: true,
  },
  announcements: {
    type: String,
    trim: true,
  },
  capacity: Number,
  parking_capacity: Number,
  amenities: {
    type: Array,
    default: [],
  },
  last_updated_by: String,
  last_update_date: Date,
  hours: {
    type: Array,
    default: [],
  },
  complex_id: String,
  district_id: String,
  contact_id: {
    type: Array,
    default: [],
  },
});

const Park = mongoose.Schema("Park", ParkSchema);

module.exports = Park;

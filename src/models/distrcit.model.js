const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const DistrictSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
  },
});

const District = mongoose.Schema("District", DistrictSchema);

module.exports = District;

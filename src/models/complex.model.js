const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ComplexSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  active: {
    type: Boolean,
  },
  district_id: String,
});

const Complex = mongoose.Schema("Complex", ComplexSchema);

module.exports = Complex;

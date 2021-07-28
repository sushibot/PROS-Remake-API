const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ContactSchema = new Schema({
  id: String,
  contact_number: {
    type: String,
    trim: true,
    required: true,
  },
  district_id: {
    type: String,
    trim: true,
    required: true,
  },
});

const Contact = mongoose.Schema("Contact", ContactSchema);

module.exports = Contact;

const course = require("./models/course.model");

const regiestered_schemas = () => {
  course.register_schema();
};

module.exports = regiestered_schemas;

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const { routes } = require("../index.routes");
const run_express_app = async ({ app }) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }), express.json());

  return routes({ app });
};
module.exports = {
  run_express_app,
};

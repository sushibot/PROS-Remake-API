const { run_application } = require("./loaders/index");
const { PORT } = require("./config/config");
const express = require("express");
const regiestered_schemas = require("./index.models");
async function start_application() {
  const app = express();
  regiestered_schemas();
  await run_application({ app });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
}
start_application();

const { run_application } = require("./loaders/index");
const { PORT } = require("./config/config");
const express = require("express");

async function start_application() {
  const app = express();
  await run_application({ app });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
}
start_application();

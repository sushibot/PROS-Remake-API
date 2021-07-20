const { run_express_app } = require("./express");
const { run_mongo_connection } = require("./mongo");

const run_application = async ({ app }) => {
  const mongo_connection = await run_mongo_connection();
  console.log("MongoDB connected....");
  const run_express = await run_express_app({ app });
  console.log("Express app initialized.....");
};
module.exports = {
  run_application,
};

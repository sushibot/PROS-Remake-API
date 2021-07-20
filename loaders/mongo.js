const { MONGO_CONNECTION_STRING } = require("../config/config");
const mongoose = require("mongoose");

const run_mongo_connection = async () => {
  const connection = await mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  });
  return connection;
};
module.exports = {
  run_mongo_connection,
};

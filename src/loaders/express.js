const bodyParser = require("body-parser");
const cors = require("cors");
const { routes } = require("../index.routes");
const run_express_app = async ({ app }) => {
  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  return routes({ app });
};
module.exports = {
  run_express_app,
};
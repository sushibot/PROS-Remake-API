const express = require("express");

const { course_route } = require("./routes/course.route");

const api_router = express.Router({ mergeParams: true });

api_router.use("/course", course_route);

const routes = ({ app }) => {
  app.route("/sushi/api").get((req, res) => {
    res.json({ sushi_api_version: "1" });
  });

  app.use("/sushi/api/", api_router);
};

module.exports = {
  routes,
};

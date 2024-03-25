const express = require("express");
const authRoute = require("./auth.route");
const metricsRoute = require("./metrics.route");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/metrics", metricsRoute);

module.exports = router;

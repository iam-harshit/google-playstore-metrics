const express = require("express");
const validate = require("../../middlewares/validate");
const metricsValidation = require("../../validations/metrics.validation");
const metricsController = require("../../controllers/metrics.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.get("/all", auth, metricsController.getAllMetrics);

router.get("/:metricsId", auth, validate(metricsValidation.getMetric), metricsController.getMetricById);

router.put("/:metricsId", auth, validate(metricsValidation.getMetric), metricsController.updateMetric);

router.delete("/:metricsId", auth, validate(metricsValidation.getMetric), metricsController.deleteMetric);

module.exports = router;

const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const metricsService = require("../services/metrics.service");
const ApiError = require("../utils/ApiError");

const getAllMetrics = catchAsync(async (req, res) => {
  const metrics = await metricsService.getAllMetrics();
  res.status(httpStatus.OK).json(metrics);
});

const getMetricById = catchAsync(async (req, res) => {
  const {
    metricsId
  } = req.params;
  const metric = await metricsService.getMetricById(metricsId);
  if (!metric) {
    throw new ApiError(httpStatus.NOT_FOUND, "Metric not found");
  }
  res.status(httpStatus.OK).json(metric);
});


const updateMetric = catchAsync(async (req, res) => {
  const {
    metricsId
  } = req.params;
  const updatedMetric = await metricsService.updateMetric(metricsId, req.body);
  if (!updatedMetric) {
    throw new ApiError(httpStatus.NOT_FOUND, "Metric not found");
  }
  res.status(httpStatus.OK).json(updatedMetric);
});

const deleteMetric = catchAsync(async (req, res) => {
  const {
    metricsId
  } = req.params;
  const deletedMetric = await metricsService.deleteMetric(metricsId);
  if (!deletedMetric) {
    throw new ApiError(httpStatus.NOT_FOUND, "Metric not found");
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getAllMetrics,
  getMetricById,
  updateMetric,
  deleteMetric
};
const {
    Metric
} = require("../models/metrics.model");
const ApiError = require("../utils/ApiError");

const getAllMetrics = async () => {
    return await Metric.find();
};

const getMetricById = async (metricsId) => {
    return await Metric.findById(metricsId);
};

const updateMetric = async (metricsId, updatedMetricData) => {
    const updatedMetric = await Metric.findByIdAndUpdate(metricsId, updatedMetricData, {
        new: true
    });
    if (!updatedMetric) {
        throw new ApiError(httpStatus.NOT_FOUND, "Metric not found");
    }
    return updatedMetric;
};

const deleteMetric = async (metricsId) => {
    const deletedMetric = await Metric.findByIdAndDelete(metricsId);
    if (!deletedMetric) {
        throw new ApiError(httpStatus.NOT_FOUND, "Metric not found");
    }
    return deletedMetric;
};

module.exports = {
    getAllMetrics,
    getMetricById,
    updateMetric,
    deleteMetric
};
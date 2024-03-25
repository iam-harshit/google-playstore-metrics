const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getMetrics = {
  params: Joi.object().keys({
    metricsId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getMetrics,
};

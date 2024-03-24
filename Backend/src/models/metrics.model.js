const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true
    },
    downloads: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    installs: {
        type: Number,
        required: true
    },
    activeInstalls: {
        type: Number,
        required: true
    },
    uninstalls: {
        type: Number,
        required: true
    },
    retentionRate: {
        type: Number,
        required: true
    },
    crashReports: {
        type: Number,
        required: true
    },
    userDemographics: {
        type: Object,
        required: true
    }
});

const Metric = mongoose.model('metric', MetricSchema);
module.exports = {
    Metric
}
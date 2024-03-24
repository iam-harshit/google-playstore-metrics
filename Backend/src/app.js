const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const {errorHandler} = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

app.use(errorHandler);

module.exports = app;


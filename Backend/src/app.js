const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const {errorHandler} = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const helmet = require("helmet");
const passport = require("passport");
const {jwtStrategy} = require("./config/passport");
const routes = require("./routes/v1");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

app.use(errorHandler);

module.exports = app;


const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");
const userService = require("../services/user.service");
const tokenService = require("../services/token.service");

const register = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    const tokens = await tokenService.generateAuthToken(user);
    res.status(httpStatus.CREATED).send({user, tokens});
});

const login = catchAsync(async (req, res) => {
    const {email, password} = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthToken(user);
    res.status(httpStatus.OK).send({user, tokens});
});

module.exports = {
    register,
    login
}
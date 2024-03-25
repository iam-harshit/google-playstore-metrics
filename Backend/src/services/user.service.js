const {User} = require("../models/user.model");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

/**
 * Get user by email
 * - Fetch user object from Mongo using the "email" field and return user object
 * @param {string} email
 * @returns {Promise<User>}
 */

const getUserByEmail = async(email) => {
    const user = await User.findOne({email});
    return user;
}

const createUser = async(data) => {
    if(await User.isEmailTaken(data.email)){
        throw new ApiError(httpStatus.OK, "Email already taken");
    }
    if(!data.email){
        throw new ApiError(httpStatus.BAD_REQUEST, "Email is not allowed to be empty");
    }
    if(!data.name){
        throw new ApiError(httpStatus.BAD_REQUEST, "Name field is required");
    }
    if(!data.password){
        throw new ApiError(httpStatus.BAD_REQUEST, "Password field is required");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const user = await User.create({...data, password: hashedPassword});

    return user;
}

module.exports = {
    getUserByEmail,
    createUser
}
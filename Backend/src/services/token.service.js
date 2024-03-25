const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {tokenTypes} = require("../config/tokens");

/**
 *
 * @param {ObjectId} userId - Mongo user id
 * @param {Number} expires - Token expiration time in seconds since unix epoch
 * @param {string} type - Access token type eg: Access, Refresh
 * @param {string} [secret] - Secret key to sign the token, defaults to config.jwt.secret
 * @returns {string}
 */

const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
    const payload = {
        sub: userId,
        type: type,
        exp: expires,
        iat: Date.now()/1000,
    };
    const jwtToken = jwt.sign(payload, secret);
    return jwtToken;
};

/**
 * 
 * @param {User} user
 * @returns {Promise<Object>}
 * 
 */

const generateAuthToken = async (user) => {
    const expires = Math.floor(Date.now()/1000) + config.jwt.accessExpirationMinutes * 60;
    const accessToken = generateToken(user.id, expires, tokenTypes.ACCESS);
    return{
        access:{
            token: accessToken,
            expires: new Date(expires * 1000)
        }
    }
};

module.exports = {
    generateToken,
    generateAuthToken
}

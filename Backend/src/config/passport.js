const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config");
const { tokenTypes } = require("./tokens");
const { User } = require("../models/user.model");

 const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
};

/**
 *
 * @param payload - the payload the token was generated with
 * @param done - callback function
 * 
 */

 const jwtVerify = async (payload, done) => {
  try{
    if(payload.type !== tokenTypes.ACCESS){
      return done(new Error("Invalid Token Type"), false);
    }

    if(payload.time > payload.expiry){
      return done(new Error("Token expired, please re-login"), false);
    }

    const user = await User.findById(payload.sub) //payload.user._id 
    if(!user){
      return done(null, false);
    }
    done(null, user);
  } catch(err) {
    return done(err, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.header.Authorization || req.header.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User Is Not Authoraized");
      }
      // console.log(decoded);
      req.user = decoded.user;
      next()
    });

    if(!token){
      res.status(401)
      throw new Error("User Is Not Authorazied ot token is Missing In the Request")
    }
  }
});

module.exports = validateToken;

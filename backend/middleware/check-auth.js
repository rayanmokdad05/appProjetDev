const jwt = require("jsonwebtoken");
const HttpError = require("../util/http-error");
module.exports = (req, res, next) => {
  try {
    if (req.method === "OPTIONS") {
      return next();
    }
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, "cleSuperSecrete!");
    console.log("---avant----");
    console.log(req.userData);
    req.userData = { userId: decodedToken.userId };
    console.log("----apres---");
    console.log(req.userData);
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 401);
    return next(error);
  }
};

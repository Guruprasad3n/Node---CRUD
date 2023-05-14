const { constants } = require("../constents");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.VALIDATION_FAILED:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });

      case constants.UNAUTHORAIZED:
      res.json({
        title: "Un Authoraized",
        message: err.message,
        stackTrace: err.stack,
      });

      case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
        console.log("No Errors")
      break;
  }
};

module.exports = errorHandler;

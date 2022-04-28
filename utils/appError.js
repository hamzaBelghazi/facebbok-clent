module.exports = class extends Error {
  constructor(message, errStatusCode) {
    super(message);
    this.errCode = errStatusCode;
    this.status = `${errStatusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
};

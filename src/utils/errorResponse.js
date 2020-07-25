class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
  }
}

export default ErrorResponse;

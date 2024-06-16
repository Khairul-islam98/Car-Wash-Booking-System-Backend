class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
    this.stack = stack;
  }
}

export default AppError;

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = 'Something went wrong';
  const errorSources = [
    {
      path: '',
      message: err.message || 'something went wrong',
    },
  ];
  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources: errorSources,
    statusCode: statusCode,
  });
};
export default globalErrorHandler;

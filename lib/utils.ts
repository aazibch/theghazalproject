import Joi from 'joi';

import { AuthCredentials } from '@/types';

class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode.toString().startsWith('4') ? 'failure' : 'error';
    this.isOperational = true;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export default AppError;

export const isSignupCredentials = (credentials: AuthCredentials) => {
  return (
    typeof credentials === 'object' &&
    credentials !== null &&
    'fullName' in credentials
  );
};

export const scrollToPageBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

export const generateValidator = (
  schema: Joi.ObjectSchema,
  abortEarly = true
) => {
  return (values: Record<string, any>) => {
    const validationErrors: Record<string, string> = {};
    const { error } = schema.validate(values, { abortEarly });

    if (error) {
      for (let x of error.details) {
        if (x.context?.label) {
          validationErrors[x.context.label] = x.message;
        }
      }
    }

    return validationErrors;
  };
};

export const formatValidationErrors = (errors: Joi.ValidationError) => {
  const validationErrors: Record<string, string> = {};

  if (errors) {
    for (let x of errors.details) {
      if (x.context?.label) {
        validationErrors[x.context.label] = x.message;
      }
    }
  }

  return validationErrors;
};

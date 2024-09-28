import Joi from 'joi';

import { generateValidationMessage } from './generateValidationMessage';

export const signupSchema = Joi.object({
  fullName: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z ]*$/))
    .min(3)
    .max(75)
    .required()
    .messages({
      'string.pattern.base':
        'The full name may only contain alphabets (letters A-Z) and spaces.',
      'string.min': generateValidationMessage('min', 'full name', 3),
      'string.max': generateValidationMessage('max', 'full name', 75),
      'any.required': generateValidationMessage('required', 'full name')
    }),
  username: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9_]*$/))
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.pattern.base':
        'The username may only contain alphanumeric characters (letters A-Z, numbers 0-9) and underscores (_).',
      'string.min': generateValidationMessage('min', 'username', 3),
      'string.max': generateValidationMessage('max', 'username', 50),
      'any.required': generateValidationMessage('required', 'username')
    }),
  email: Joi.string()
    .min(5)
    .max(50)
    .email()
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'email address', 5),
      'string.max': generateValidationMessage('max', 'email address', 50),
      'string.email': generateValidationMessage('email'),
      'any.required': generateValidationMessage('required', 'email address')
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'password', 8),
      'any.required': generateValidationMessage('required', 'password')
    }),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.required': generateValidationMessage(
        'required',
        'password confirmation'
      ),
      'any.only': generateValidationMessage('passwordConfirmation')
    })
});

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
      'string.empty': generateValidationMessage('required', 'full name'),
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
      'string.empty': generateValidationMessage('required', 'username'),
      'any.required': generateValidationMessage('required', 'username')
    }),
  email: Joi.string()
    .min(5)
    .max(50)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'email address', 5),
      'string.max': generateValidationMessage('max', 'email address', 50),
      'string.email': generateValidationMessage('email'),
      'string.empty': generateValidationMessage('required', 'email address'),
      'any.required': generateValidationMessage('required', 'email address')
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'password', 8),
      'string.empty': generateValidationMessage('required', 'password'),
      'any.required': generateValidationMessage('required', 'password')
    }),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': generateValidationMessage(
        'required',
        'password confirmation'
      ),
      'any.required': generateValidationMessage(
        'required',
        'password confirmation'
      ),
      'any.only': generateValidationMessage('passwordConfirmation')
    })
});

export const updateProfileSettingsSchema = Joi.object({
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
      'string.empty': generateValidationMessage('required', 'full name'),
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
      'string.empty': generateValidationMessage('required', 'username'),
      'any.required': generateValidationMessage('required', 'username')
    })
});

export const newPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'password', 8),
      'string.empty': generateValidationMessage('required', 'password'),
      'any.required': generateValidationMessage('required', 'password')
    }),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': generateValidationMessage(
        'required',
        'password confirmation'
      ),
      'any.required': generateValidationMessage(
        'required',
        'password confirmation'
      ),
      'any.only': generateValidationMessage('passwordConfirmation')
    })
});

export const colGhazalEntrySchema = Joi.object({
  lineOne: Joi.string()
    .min(30)
    .max(60)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'line one', 30),
      'string.max': generateValidationMessage('max', 'line one', 60),
      'string.empty': generateValidationMessage('required', 'line one'),
      'any.required': generateValidationMessage('required', 'line one')
    }),
  lineTwo: Joi.string()
    .min(30)
    .max(60)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'line two', 30),
      'string.max': generateValidationMessage('max', 'line two', 60),
      'string.empty': generateValidationMessage('required', 'line two'),
      'any.required': generateValidationMessage('required', 'line two')
    })
});

export const contactSchema = Joi.object({
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
      'string.empty': generateValidationMessage('required', 'full name'),
      'any.required': generateValidationMessage('required', 'full name')
    }),
  email: Joi.string()
    .min(5)
    .max(50)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'email address', 5),
      'string.max': generateValidationMessage('max', 'email address', 50),
      'string.email': generateValidationMessage('email'),
      'string.empty': generateValidationMessage('required', 'email address'),
      'any.required': generateValidationMessage('required', 'email address')
    }),
  message: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.min': generateValidationMessage('min', 'message', 5),
      'string.empty': generateValidationMessage('required', 'message'),
      'any.required': generateValidationMessage('required', 'message')
    })
});

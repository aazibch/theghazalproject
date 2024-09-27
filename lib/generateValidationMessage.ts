export const generateValidationMessage = (
  type: string,
  property?: string,
  restriction?: number | string[]
) => {
  if (type === 'length') {
    return `The ${property} should be ${restriction} characters.`;
  }

  if (type === 'min') {
    return `The ${property} should be at least ${restriction} characters.`;
  }

  if (type === 'max') {
    return `The ${property} should be fewer than ${restriction} characters.`;
  }

  if (type === 'required') {
    return `The ${property} is required.`;
  }

  if (type === 'email') {
    return 'The email address is not valid.';
  }

  if (type === 'passwordConfirmation') {
    return 'The passwords do not match.';
  }

  if (type === 'newPasswordConfirmation') {
    return 'The new passwords do not match.';
  }

  if (type === 'only') {
    if (Array.isArray(restriction)) {
      const updatedRestriction = restriction.map((elem) => `"${elem}"`);

      if (updatedRestriction.length > 2) {
        updatedRestriction[updatedRestriction.length - 1] =
          'or ' + updatedRestriction[updatedRestriction.length - 1];

        return `The ${property} must be ${updatedRestriction.join(', ')}.`;
      }

      return `The ${property} must be ${updatedRestriction.join(' or ')}.`;
    }
  }

  const updatedProperty = `"${property}"`;

  return `Invalid value for the ${updatedProperty} property.`;
};

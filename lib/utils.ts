import { AuthCredentials } from '@/types';

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

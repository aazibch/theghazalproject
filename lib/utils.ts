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

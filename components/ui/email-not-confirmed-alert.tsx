import { Alert } from 'flowbite-react';
import { EMAIL_NOT_CONFIRMED_ALERT } from '@/constants';

export default function EmailNotConfirmedAlert() {
  return (
    <Alert color="warning">
      <span className="font-semibold">Alert!</span> {EMAIL_NOT_CONFIRMED_ALERT}
    </Alert>
  );
}

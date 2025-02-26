'use client';

import { useFormState } from 'react-dom';
import { Label, TextInput } from 'flowbite-react';

import { submitEmailForPasswordReset } from '@/lib/actions';
import FormSubmitButton from '../../../ui/form-submit-button';
import EmailSuccessScreen from './email-success-screen';

export default function EmailForm() {
  const [formState, formAction] = useFormState(submitEmailForPasswordReset, {
    status: null
  });

  const { status, message } = formState;

  return (
    <div className="max-w-md mx-auto">
      {status === 'success' ? (
        <EmailSuccessScreen />
      ) : (
        <form action={formAction} className="flex flex-col gap-4">
          {status === 'failure' && (
            <p className="text-red-600 text-center">{message}</p>
          )}

          <p>
            Enter the email address associated with your account, and we'll send
            you an email.
          </p>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" name="email" type="email" required />
          </div>

          <FormSubmitButton />
        </form>
      )}
    </div>
  );
}

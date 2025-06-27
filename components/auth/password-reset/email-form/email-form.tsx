'use client';

import { useActionState } from 'react';
import { Label, TextInput } from 'flowbite-react';

import { submitEmailForPasswordReset } from '@/lib/actions';
import FormSubmitButton from '../../../ui/form-submit-button';
import EmailSuccessScreen from './email-success-screen';

export default function EmailForm() {
  const [formState, formAction] = useActionState(submitEmailForPasswordReset, {
    isSuccess: null
  });

  const { isSuccess, message } = formState;

  return (
    <div className="max-w-md mx-auto">
      {isSuccess ? (
        <EmailSuccessScreen />
      ) : (
        <form action={formAction} className="flex flex-col gap-4">
          {isSuccess && <p className="text-red-600 text-center">{message}</p>}

          <p>
            Enter the email address associated with your account, and we will
            send you an email.
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

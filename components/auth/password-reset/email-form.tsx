'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Label, TextInput } from 'flowbite-react';

import { submitEmailForPasswordReset } from '@/lib/actions';
import FormSubmitButton from '../../ui/form-submit-button';
import { PasswordResetStage } from '@/types';

export default function EmailForm({
  setStageHandler
}: {
  setStageHandler: (value: PasswordResetStage) => void;
}) {
  const [formState, formAction] = useFormState(submitEmailForPasswordReset, {
    status: null
  });

  const { status } = formState;

  useEffect(() => {
    if (status === 'success') {
      setStageHandler('pin');
    }
  }, [status]);

  return (
    <div>
      <form
        action={formAction}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <p className="text-sm">
          Please enter the email address associated with your account, and we'll
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
    </div>
  );
}

'use client';

import { useActionState, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import PasswordFailureScreen from './password-failure-screen';
import PasswordSuccessScreen from './password-success-screen';
import { resetPassword } from '@/lib/actions';

export default function PasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [formState, formAction, pending] = useActionState(
    resetPassword.bind(null, token),
    {
      isSuccess: null
    }
  );

  let content = (
    <form action={formAction} method="POST" className="flex flex-col gap-4">
      {formState.errorMessage && (
        <p className="text-red-600 text-center">{formState.errorMessage}</p>
      )}
      <p>Please enter a new password for your account below.</p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="newPassword" value="New Password" />
        </div>
        <TextInput
          id="newPassword"
          name="newPassword"
          type="password"
          required
          color={formState.validationErrors?.newPassword && 'failure'}
          helperText={formState.validationErrors?.newPassword}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="newPasswordConfirmation" value="Confirm Password" />
        </div>
        <TextInput
          id="newPasswordConfirmation"
          name="newPasswordConfirmation"
          type="password"
          required
          color={
            formState.validationErrors?.newPasswordConfirmation && 'failure'
          }
          helperText={formState.validationErrors?.newPasswordConfirmation}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={pending} color="blue">
          {pending ? (
            <Spinner size="sm" aria-label="loading spinner" />
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );

  if (formState.errorMessage) {
    content = <PasswordFailureScreen message={formState.errorMessage} />;
  }

  if (formState.isSuccess) {
    content = <PasswordSuccessScreen />;
  }

  return <div className="max-w-md mx-auto">{content}</div>;
}

'use client';

import { useActionState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { SessionUser } from '@/types';
import { updateAccountEmailSettings } from '@/lib/actions';

interface EmailSettingsFormProps {
  user: {
    email: SessionUser['email'];
  };
}

export default function EmailSettingsForm({ user }: EmailSettingsFormProps) {
  const [state, formAction, pending] = useActionState(
    updateAccountEmailSettings,
    {
      isSuccess: null,
      formFields: {
        email: user.email
      }
    }
  );

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Email Address</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          name="email"
          id="email"
          type="text"
          defaultValue={state.formFields.email}
          required
          color={state.validationErrors?.email && 'failure'}
          helperText={
            (state.isSuccess &&
              'We have sent a confirmation link to your new email.') ||
            (state.validationErrors?.email && state.validationErrors?.email)
          }
        />
      </div>
      <div>
        <Button
          disabled={pending}
          className="float-end px-5"
          color="blue"
          type="submit"
        >
          {pending ? (
            <Spinner size="sm" aria-label="loading spinner" />
          ) : (
            'Save'
          )}
        </Button>
      </div>
    </form>
  );
}

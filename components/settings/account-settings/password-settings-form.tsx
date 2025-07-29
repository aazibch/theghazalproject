'use client';

import { useActionState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { updateAccountPasswordSettings } from '@/lib/actions';

export default function PasswordSettingsForm() {
  const [state, formAction, pending] = useActionState(
    updateAccountPasswordSettings,
    {
      isSuccess: null
    }
  );

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Password</h2>

      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="currentPassword" value="Current Password" />
        </div>
        <TextInput
          name="currentPassword"
          id="currentPassword"
          type="password"
        />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="newPassword" value="New Password" />
        </div>
        <TextInput name="newPassword" id="newPassword" type="password" />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label
            htmlFor="newPasswordConfirmation"
            value="Password Confirmation"
          />
        </div>
        <TextInput
          name="newPasswordConfirmation"
          id="newPasswordConfirmation"
          type="password"
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

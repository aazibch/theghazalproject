'use client';

import { useActionState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { updateAccountPasswordSettings } from '@/lib/actions';
import { useFormChangeTracker } from '@/hooks/use-field-change-tracker';
import { signOut } from 'next-auth/react';

export default function PasswordSettingsForm() {
  const [state, formAction, pending] = useActionState(
    updateAccountPasswordSettings,
    {
      isSuccess: null
    }
  );

  const { enableSave, handleInputChange } = useFormChangeTracker({
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: ''
  });

  if (state.isSuccess) {
    signOut({ callbackUrl: '/auth/login', redirect: true });
  }

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
          required
          onChange={handleInputChange}
          color={state.validationErrors?.currentPassword && 'failure'}
          helperText={state.validationErrors?.currentPassword}
        />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="newPassword" value="New Password" />
        </div>
        <TextInput
          name="newPassword"
          id="newPassword"
          type="password"
          required
          onChange={handleInputChange}
          color={state.validationErrors?.newPassword && 'failure'}
          helperText={state.validationErrors?.newPassword}
        />
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
          required
          onChange={handleInputChange}
          color={state.validationErrors?.newPasswordConfirmation && 'failure'}
          helperText={state.validationErrors?.newPasswordConfirmation}
        />
      </div>
      <div>
        <Button
          disabled={pending || !enableSave}
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

'use client';

import { useActionState, useEffect } from 'react';
import { Button, HelperText, Label, Spinner, TextInput } from 'flowbite-react';

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

  useEffect(() => {
    if (state.isSuccess) {
      signOut({ callbackUrl: '/auth/login', redirect: true });
    }
  }, [state.isSuccess]);

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Password</h2>

      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="currentPassword">Current Password</Label>
        </div>
        <TextInput
          name="currentPassword"
          id="currentPassword"
          type="password"
          required
          onChange={handleInputChange}
          color={state.validationErrors?.currentPassword && 'failure'}
        />
        {state.validationErrors?.currentPassword && (
          <HelperText>{state.validationErrors?.currentPassword}</HelperText>
        )}
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="newPassword">New Password</Label>
        </div>
        <TextInput
          name="newPassword"
          id="newPassword"
          type="password"
          required
          onChange={handleInputChange}
          color={state.validationErrors?.newPassword && 'failure'}
        />
        {state.validationErrors?.newPassword && (
          <HelperText>{state.validationErrors?.newPassword}</HelperText>
        )}
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="newPasswordConfirmation">Password Confirmation</Label>
        </div>
        <TextInput
          name="newPasswordConfirmation"
          id="newPasswordConfirmation"
          type="password"
          required
          onChange={handleInputChange}
          color={state.validationErrors?.newPasswordConfirmation && 'failure'}
        />
        {state.validationErrors?.newPasswordConfirmation && (
          <HelperText>
            {state.validationErrors?.newPasswordConfirmation}
          </HelperText>
        )}
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

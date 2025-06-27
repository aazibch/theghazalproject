'use client';

import { useActionState, useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { IUser } from '@/types';
import { updateAccountEmailSettings } from '@/lib/actions';
import { useFormChangeTracker } from '@/hooks/field-change-tracker';

interface EmailSettingsFormProps {
  user: {
    email: IUser['email'];
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

  const { enableSave, handleInputChange } = useFormChangeTracker(
    state.formFields
  );

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Email Address</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          onChange={handleInputChange}
          name="email"
          id="email"
          type="email"
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

// TODO: Look into creating a hook to move the functionality for disabling or enabling Save button on changes to the input field.

'use client';

import FormSubmitButton from '@/components/ui/form-submit-button';
import { Label, TextInput } from 'flowbite-react';

export default function PasswordForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <p className="text-sm">
        Please enter a secure new password for your account below.
      </p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" name="password" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="passwordConfirmation" value="Confirm Password" />
        </div>
        <TextInput
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          required
        />
      </div>

      <FormSubmitButton />
    </form>
  );
}

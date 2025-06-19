'use client';

import { useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

import { SessionUser } from '@/types';
import { updateAccountEmailSettingsSchema } from '@/lib/schemas';
import { generateValidator } from '@/lib/utils';
import { updateAccountEmailSettings } from '@/lib/actions';

interface EmailSettingsFormProps {
  user: {
    email: SessionUser['email'];
  };
}

export default function EmailSettingsForm({ user }: EmailSettingsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>();

  const formik = useFormik({
    initialValues: {
      email: user.email
    },
    validate: generateValidator(updateAccountEmailSettingsSchema, false),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      await updateAccountEmailSettings(values.email);
      setIsSuccess(true);

      setIsSubmitting(false);
    }
  });

  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-2">Email Address</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          name="email"
          id="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          color={formik.errors.email && 'failure'}
          helperText={
            (isSuccess &&
              'We have sent a confirmation link to your new email.') ||
            (formik.errors.email && formik.errors.email)
          }
        />
      </div>
      <div>
        <Button
          disabled={isSubmitting}
          className="float-end px-5"
          color="blue"
          type="submit"
        >
          {isSubmitting ? (
            <Spinner size="sm" aria-label="loading spinner" />
          ) : (
            'Save'
          )}
        </Button>
        {/* <Button onClick={}>Test Button</Button> */}
      </div>
    </form>
  );
}

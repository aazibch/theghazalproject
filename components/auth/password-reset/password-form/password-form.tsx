'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFormik } from 'formik';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { newPasswordSchema } from '@/lib/schemas';
import { resetPassword } from '@/lib/actions';
import PasswordFailureScreen from './password-failure-screen';
import PasswordSuccessScreen from './password-success-screen';
import { generateValidator } from '@/lib/utils';

export default function PasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState<
    string | undefined
  >();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    validate: generateValidator(newPasswordSchema, false),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const { password, passwordConfirmation } = values;

      setIsSubmitting(true);

      const res = await resetPassword(token, password, passwordConfirmation);

      if (!res.isSuccess && 'message' in res) {
        setBackendErrorMessage(res.message);
      }

      if (res.isSuccess) {
        setIsSuccess(true);
      }

      setIsSubmitting(false);
    }
  });

  let content = (
    <form
      method="post"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4"
    >
      {backendErrorMessage && (
        <p className="text-red-600 text-center">{backendErrorMessage}</p>
      )}
      <p>Please enter a new password for your account below.</p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
          name="password"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          color={formik.errors.password && 'failure'}
          helperText={formik.errors.password && formik.errors.password}
        />
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
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          color={formik.errors.passwordConfirmation && 'failure'}
          helperText={
            formik.errors.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} color="blue">
          {isSubmitting ? (
            <Spinner size="sm" aria-label="loading spinner" />
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );

  if (backendErrorMessage) {
    content = <PasswordFailureScreen message={backendErrorMessage} />;
  }

  if (isSuccess) {
    content = <PasswordSuccessScreen />;
  }

  return <div className="max-w-md mx-auto">{content}</div>;
}

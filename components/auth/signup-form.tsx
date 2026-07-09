'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, HelperText, Label, Spinner, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';

import { redirectAfterAuth } from '@/lib/actions';
import { signupSchema } from '@/lib/schemas';
import styles from './form.module.css';
import { generateValidator } from '@/lib/utils';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState<
    string | undefined
  >();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validate: generateValidator(signupSchema, false),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const { fullName, username, email, password, passwordConfirmation } =
        values;

      setIsSubmitting(true);

      const res = await signIn('credentials-signup', {
        fullName,
        username,
        email,
        password,
        passwordConfirmation,
        redirect: true,
        callbackUrl: '/'
      });

      if (res?.error) {
        setBackendErrorMessage(res.error);
        setIsSubmitting(false);
      }
    }
  });

  return (
    <form
      method="post"
      onSubmit={formik.handleSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
      {backendErrorMessage && (
        <p className="text-red-600 text-center mb-6">{backendErrorMessage}</p>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName">Full Name</Label>
        </div>
        <TextInput
          name="fullName"
          id="fullName"
          type="text"
          required
          value={formik.values.fullName}
          onChange={formik.handleChange}
          color={formik.errors.fullName && 'failure'}
        />
        {formik.errors.fullName && (
          <HelperText color="failure">{formik.errors.fullName}</HelperText>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Username</Label>
        </div>
        <TextInput
          name="username"
          id="username"
          type="text"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          color={formik.errors.username && 'failure'}
        />
        {formik.errors.username && (
          <HelperText color="failure">{formik.errors.username}</HelperText>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Email</Label>
        </div>
        <TextInput
          name="email"
          id="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          color={formik.errors.email && 'failure'}
        />
        {formik.errors.email && (
          <HelperText color="failure">{formik.errors.email}</HelperText>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Password</Label>
        </div>
        <TextInput
          id="password"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          color={formik.errors.password && 'failure'}
        />
        {formik.errors.password && (
          <HelperText color="failure">{formik.errors.password}</HelperText>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="passwordConfirmation">Confirm Password</Label>
        </div>
        <TextInput
          name="passwordConfirmation"
          id="passwordConfirmation"
          type="password"
          required
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          color={formik.errors.passwordConfirmation && 'failure'}
        />
        {formik.errors.passwordConfirmation && (
          <HelperText color="failure">
            {formik.errors.passwordConfirmation}
          </HelperText>
        )}
      </div>

      <Button disabled={isSubmitting} color="blue" type="submit">
        {isSubmitting ? (
          <Spinner size="sm" aria-label="loading spinner" />
        ) : (
          <span>Submit</span>
        )}
      </Button>
      <div className="mt-5">
        <p
          className={`${styles.authAlternativeMessage} text-gray-500 text-sm mb-5`}
        >
          Already have an account?
        </p>
        <Link className="hover:no-underline block w-full" href="/auth/login">
          <Button outline color="blue" className="block w-full">
            Login Instead
          </Button>
        </Link>
      </div>
    </form>
  );
}

// TODO: Where possible, manage forms using useActionState() hook.

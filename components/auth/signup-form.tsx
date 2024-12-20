'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';

import { redirectAfterAuth } from '@/lib/actions';
import { signupSchema } from '@/lib/schemas';
import styles from './form.module.css';

interface FormErrors {
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState<
    string | undefined
  >();

  const validate = (values: FormErrors) => {
    const validationErrors: FormErrors = {};

    const { error } = signupSchema.validate(values, { abortEarly: false });

    if (error) {
      for (let x of error.details) {
        if (x.context?.label) {
          validationErrors[x.context.label as keyof FormErrors] = x.message;
        }
      }
    }

    return validationErrors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validate: validate,
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
        redirect: false
      });

      if (res?.error) {
        setBackendErrorMessage(res.error);
        setIsSubmitting(false);
      }

      if (res?.status === 200) {
        redirectAfterAuth();
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
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
          name="fullName"
          id="fullName"
          type="text"
          placeholder="John Doe"
          required
          value={formik.values.fullName}
          onChange={formik.handleChange}
          color={formik.errors.fullName && 'failure'}
          helperText={formik.errors.fullName && formik.errors.fullName}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          name="username"
          id="username"
          type="text"
          placeholder="JohnTheBard"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          color={formik.errors.username && 'failure'}
          helperText={formik.errors.username && formik.errors.username}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          name="email"
          id="email"
          type="email"
          placeholder="poet@poetsdomain.com"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          color={formik.errors.email && 'failure'}
          helperText={formik.errors.email && formik.errors.email}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
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
          name="passwordConfirmation"
          id="passwordConfirmation"
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

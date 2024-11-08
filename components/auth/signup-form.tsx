'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';

import { redirectAfterAuth } from '@/lib/actions';
import { signupSchema } from '@/lib/schemas';
import SubmitButton from './submit-button';
import styles from './form.module.css';

interface FormErrors {
  fullName: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirmation: string | undefined;
}

export default function SignupForm() {
  const validate = (values: FormErrors) => {
    const validationErrors = {
      fullName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };

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
      console.log('values', values);
      const { fullName, username, email, password, passwordConfirmation } =
        values;

      const res = await signIn('credentials-signup', {
        fullName,
        username,
        email,
        password,
        passwordConfirmation,
        redirect: false
      });

      if (res?.error) {
        console.log('[singup-form.tsx] error', res.error);
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

      <SubmitButton />
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

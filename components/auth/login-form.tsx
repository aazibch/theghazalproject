'use client';

import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import styles from './form.module.css';
import { redirectAfterAuth } from '@/lib/actions';

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState<
    string | undefined
  >();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await signIn('credentials', {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
      redirect: false
    });

    if (res?.error) {
      setBackendErrorMessage(res.error);
      setIsSubmitting(false);
    }

    if (res?.status === 200) {
      redirectAfterAuth();
    }
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
      {backendErrorMessage && (
        <p className="text-red-600 text-center mb-6">{backendErrorMessage}</p>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="poet@poetsdomain.com"
          required
          ref={emailRef}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required ref={passwordRef} />
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
          Don&apos;t have an account?
        </p>
        <Link className="hover:no-underline block w-full" href="/auth/signup">
          <Button outline color="blue" className="block w-full">
            Signup Instead
          </Button>
        </Link>
      </div>
    </form>
  );
}

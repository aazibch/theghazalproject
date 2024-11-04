'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Button, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';

import styles from './form.module.css';
import SubmitButton from './submit-button';
import { redirectAfterAuth } from '@/lib/actions';

export default function SignupForm() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = fullNameRef.current!.value;
    const username = usernameRef.current!.value;
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const passwordConfirmation = passwordConfirmationRef.current!.value;

    const res = await signIn('credentials-signup', {
      fullName,
      username,
      email,
      password,
      passwordConfirmation,
      redirect: false
    });

    console.log('[formSubmitHandler] res', res);

    if (res?.error) {
      console.log('res.error');
    }

    if (res?.status === 200) {
      redirectAfterAuth();
    }
  };

  return (
    <form
      method="post"
      onSubmit={formSubmitHandler}
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
          ref={fullNameRef}
          name="fullName"
          id="fullName"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="JohnTheBard"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          ref={emailRef}
          name="email"
          id="email"
          type="email"
          placeholder="poet@poetsdomain.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput ref={passwordRef} id="password" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="passwordConfirmation" value="Confirm Password" />
        </div>
        <TextInput
          ref={passwordConfirmationRef}
          name="passwordConfirmation"
          id="passwordConfirmation"
          type="password"
          required
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

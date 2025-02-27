import Link from 'next/link';
import { Button } from 'flowbite-react';

export default function PasswordSuccessScreen() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Your password was successfully reset! You may now login with your new
        password.
      </p>
      <div className="flex justify-end">
        <Link className="hover:no-underline" href="/auth/login">
          <Button>Back to Login</Button>
        </Link>
      </div>
    </div>
  );
}

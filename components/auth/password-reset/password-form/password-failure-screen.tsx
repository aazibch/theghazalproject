import Link from 'next/link';
import { Button } from 'flowbite-react';

export default function PasswordFailureScreen({
  message
}: {
  message: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-red-600">{message}</p>
      <div className="flex justify-end gap-2">
        <Link className="hover:no-underline" href="/auth/password-reset">
          <Button color="blue">Try Again</Button>
        </Link>
        <Link className="hover:no-underline" href="/auth/login">
          <Button>Back to Login</Button>
        </Link>
      </div>
    </div>
  );
}

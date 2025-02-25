import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function EmailSuccessScreen() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        We've sent you an email. Follow the instructions to recover your
        account.
      </p>
      <div className="flex flex-row-reverse">
        <Link className="hover:no-underline" href="/auth/login">
          <Button color="blue">Back to Login</Button>
        </Link>
      </div>
    </div>
  );
}

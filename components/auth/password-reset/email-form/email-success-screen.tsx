import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function EmailSuccessScreen() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        We have sent you an email. Please follow the instructions given in it to
        recover your account.
      </p>
      <div className="flex justify-end">
        <Link className="hover:no-underline" href="/auth/login">
          <Button color="blue">Back to Login</Button>
        </Link>
      </div>
    </div>
  );
}

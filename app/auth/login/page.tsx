import Link from 'next/link';
import { Button, Label, TextInput } from 'flowbite-react';

import PageHeader from '@/components/layout/pages/page-header';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className="container mx-auto my-12">
      <PageHeader heading="Login" />
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
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
          <TextInput id="password" type="password" required />
        </div>

        <Button color="blue" type="submit">
          Submit
        </Button>
        <div className="mt-5">
          <p className={`${styles.signupMessage} text-gray-500 text-sm mb-5`}>
            Don't have an account?
          </p>
          <Link className="hover:no-underline block w-full" href="/auth/signup">
            <Button outline color="blue" className="block w-full">
              Signup Instead
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

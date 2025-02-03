import { Button, Label, TextInput } from 'flowbite-react';

import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';

export default function PasswordResetPage() {
  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        <form method="post" className="flex max-w-md flex-col gap-4 mx-auto">
          <p className="text-sm">
            Please enter the email address associated with your account.
          </p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" required />
          </div>

          <div className="flex flex-row-reverse">
            <Button className="" color="blue">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

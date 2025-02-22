import { Button, Label, TextInput } from 'flowbite-react';

export default function PasswordResetEmailForm() {
  return (
    <div>
      <form method="post" className="flex max-w-md flex-col gap-4 mx-auto">
        <p className="text-sm">
          Please enter the email address associated with your account, and we'll
          send you an email.
        </p>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" required />
        </div>

        <div className="flex flex-row-reverse">
          <Button color="blue">Submit</Button>
        </div>
      </form>
    </div>
  );
}

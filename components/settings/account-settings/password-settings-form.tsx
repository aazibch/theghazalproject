import { Button, Label, TextInput } from 'flowbite-react';

export default function PasswordSettingsForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Password</h2>

      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="currentPassword" value="Current Password" />
        </div>
        <TextInput
          name="currentPassword"
          id="currentPassword"
          type="password"
        />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="newPassword" value="New Password" />
        </div>
        <TextInput name="newPassword" id="newPassword" type="password" />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="passwordConfirmation" value="Password Confirmation" />
        </div>
        <TextInput
          name="passwordConfirmation"
          id="passwordConfirmation"
          type="password"
        />
      </div>
      <div>
        <Button className="float-end px-5" color="blue" type="submit">
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
}

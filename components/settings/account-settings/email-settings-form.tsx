import { Button, Label, TextInput } from 'flowbite-react';

export default function EmailSettingsForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Email Address</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput name="Email" id="email" type="email" required />
      </div>
      <div>
        <Button className="float-end px-5" color="blue" type="submit">
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
}

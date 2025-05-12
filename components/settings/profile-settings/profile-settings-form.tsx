import { Avatar, Button, FileInput, Label, TextInput } from 'flowbite-react';

export default function ProfileSettingsForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput name="fullName" id="fullName" type="text" required />
      </div>
      <div className="mb-1">
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput name="username" id="username" type="text" disabled />
      </div>
      <div className="flex">
        <div className="shrink-0 flex flex-col mr-4">
          <Avatar
            img="https://theghazalproject-user-avatars.s3.ap-southeast-2.amazonaws.com/default.jpg"
            rounded
            size="lg"
            className="mb-2"
          />
          <button className="mx-auto text-xs font-semibold text-gray-600 hover:text-gray-500">
            Remove
          </button>
        </div>

        <div className="flex basis-full items-center">
          <FileInput
            id="file-upload"
            theme={{
              root: {
                base: 'w-full'
              }
            }}
          />
        </div>
      </div>
      <div>
        <Button className="float-end px-5" color="blue" type="submit">
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
}

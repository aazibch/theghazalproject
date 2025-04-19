import { Avatar, Button, FileInput, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function ProfileSettings() {
  return (
    <div className="basis-full p-10">
      <form className="flex max-w-md flex-col gap-4 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Full Name" />
          </div>
          <TextInput name="fullName" id="fullName" type="text" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput name="username" id="username" type="text" required />
        </div>
        <div className="flex">
          <div className="shrink-0 flex flex-col mr-4">
            <Avatar
              img="https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg"
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
    </div>
  );
}

import { Avatar, Button, FileInput, Label, TextInput } from 'flowbite-react';
import ProfileSettingsForm from './profile-settings-form';

export default async function ProfileSettings() {
  return (
    <div className="basis-full p-10">
      <ProfileSettingsForm />
    </div>
  );
}

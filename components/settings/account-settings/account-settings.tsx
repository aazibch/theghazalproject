import EmailSettingsForm from './email-settings-form';
import PasswordSettingsForm from './password-settings-form';

export default function AccountSettings() {
  return (
    <div className="basis-full p-10">
      <EmailSettingsForm />
      <PasswordSettingsForm />
    </div>
  );
}

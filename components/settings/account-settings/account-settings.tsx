'use client';

import { useState } from 'react';
import EmailSettingsForm from './email-settings-form';
import PasswordSettingsForm from './password-settings-form';
import { SessionUser } from '@/types';

interface AccountSettingsProps {
  user: {
    email: SessionUser['email'];
  };
}

export default function AccountSettings({ user }: AccountSettingsProps) {
  const [EmailSettingsFormKey, setEmailSettingsFormKey] = useState<number>(0);

  const updateEmailSettingsFormKey = () => {
    setEmailSettingsFormKey((prevState) => prevState + 1);
  };

  return (
    <div className="basis-full p-10">
      <EmailSettingsForm
        user={user}
        resetFormHandler={updateEmailSettingsFormKey}
      />
      <PasswordSettingsForm />
    </div>
  );
}

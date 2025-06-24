'use client';

import { useState } from 'react';

import { SessionUser } from '@/types';
import ProfileSettingsForm from './profile-settings-form/profile-settings-form';

interface ProfileSettingsProps {
  user: {
    fullName: SessionUser['fullName'];
    username: SessionUser['username'];
    profilePicture: SessionUser['profilePicture'];
  };
}

export default function ProfileSettings({ user }: ProfileSettingsProps) {
  const [profileSettingsFormKey, setProfileSettingsFormKey] =
    useState<number>(0);

  const updateProfileSettingsFormKey = () => {
    setProfileSettingsFormKey((prevState) => prevState + 1);
  };

  return (
    <div className="basis-full p-10">
      <ProfileSettingsForm
        user={user}
        resetFormHandler={updateProfileSettingsFormKey}
        key={profileSettingsFormKey}
      />
    </div>
  );
}

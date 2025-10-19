'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { IUser } from '@/types';
import { updateProfileSettings } from '@/lib/actions';
import { DEFAULT_PROFILE_PICTURE } from '@/constants';
import AvatarFileInput from './avatar-file-input';
import { useFormChangeTracker } from '@/hooks/use-field-change-tracker';

interface ProfileSettingsFormProps {
  user: {
    fullName: IUser['fullName'];
    username: IUser['username'];
    profilePicture: IUser['profilePicture'];
  };
}

export default function ProfileSettingsForm({
  user
}: ProfileSettingsFormProps) {
  const [isProfilePictureRemoved, setIsProfilePictureRemoved] =
    useState<boolean>(false);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    DEFAULT_PROFILE_PICTURE
  );

  const [state, formAction, pending] = useActionState(
    updateProfileSettings.bind(null, isProfilePictureRemoved),
    {
      isSuccess: null,
      formFields: {
        fullName: user.fullName,
        avatar: null
      }
    }
  );

  const { enableSave, handleInputChange, markFieldAsChanged } =
    useFormChangeTracker(state.formFields);

  const avatarInputRef = useRef<HTMLInputElement>(null);

  const { profilePicture: userProfilePicture } = user;

  useEffect(() => {
    if (userProfilePicture) {
      setAvatarPreview(userProfilePicture);
    }
  }, [userProfilePicture]);

  const setAvatarPreviewHandler = (value: string) => {
    setAvatarPreview(value);
  };

  const setIsProfilePictureRemovedHandler = (value: boolean) => {
    setIsProfilePictureRemoved(value);
    markFieldAsChanged('avatar');
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profilePicture = e.target.files?.[0];

    markFieldAsChanged('avatar');

    if (profilePicture) {
      setIsProfilePictureRemovedHandler(false);

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === 'string'
        ) {
          const imageUrl: string = e.target.result;

          // Create an Image element to get image dimensions
          const img = new Image();
          img.onload = () => {
            // save to state.
            setAvatarPreview(imageUrl);
          };

          img.src = imageUrl;
        }
      };

      reader.readAsDataURL(profilePicture);
    }
  };

  return (
    <>
      <form
        action={formAction}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Full Name" />
          </div>
          <TextInput
            onChange={handleInputChange}
            name="fullName"
            id="fullName"
            type="text"
            required
            defaultValue={state.formFields.fullName}
            color={state.validationErrors?.fullName && 'failure'}
            helperText={state.validationErrors?.email}
          />
        </div>
        <div className="mb-1">
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            name="username"
            id="username"
            type="text"
            disabled
            value={user.username}
            helperText="You cannot change the username."
          />
        </div>
        <AvatarFileInput
          handleFileInputChange={handleFileInputChange}
          avatarInputRef={avatarInputRef}
          userProfilePicture={user.profilePicture}
          avatarPreview={avatarPreview}
          setIsProfilePictureRemovedHandler={setIsProfilePictureRemovedHandler}
          setAvatarPreviewHandler={setAvatarPreviewHandler}
        />
        <div>
          <Button
            disabled={pending || !enableSave}
            className="float-end px-5"
            color="blue"
            type="submit"
          >
            {pending ? (
              <Spinner size="sm" aria-label="loading spinner" />
            ) : (
              'Save'
            )}
          </Button>
        </div>
      </form>
    </>
  );
}

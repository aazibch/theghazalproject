import { useActionState, useEffect, useRef, useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';

import { SessionUser } from '@/types';
import { updateProfileSettings } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import { DEFAULT_PROFILE_PICTURE } from '@/constants';
import AvatarFileInput from './avatar-file-input';

interface ProfileSettingsFormProps {
  user: {
    fullName: SessionUser['fullName'];
    username: SessionUser['username'];
    profilePicture: SessionUser['profilePicture'];
  };
  resetFormHandler: () => void;
}

export default function ProfileSettingsForm({
  user,
  resetFormHandler
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
        fullName: user.fullName
      }
    }
  );

  const { update, data: session } = useSession();
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const { profilePicture: userProfilePicture } = user;

  useEffect(() => {
    if (userProfilePicture) {
      setAvatarPreview(userProfilePicture);
    }
  }, [userProfilePicture]);

  const { isSuccess } = state;

  const updateSessionAndResetForm = async () => {
    await update();
    resetFormHandler();
  };

  useEffect(() => {
    if (isSuccess) {
      updateSessionAndResetForm();
    }
  }, [isSuccess]);

  const setAvatarPreviewHandler = (value: string) => {
    setAvatarPreview(value);
  };

  const setIsProfilePictureRemovedHandler = (value: boolean) => {
    setIsProfilePictureRemoved(value);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profilePicture = e.target.files?.[0];

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
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
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
        userProfilePicture={session?.user.profilePicture || user.profilePicture}
        avatarPreview={avatarPreview}
        setIsProfilePictureRemovedHandler={setIsProfilePictureRemovedHandler}
        setAvatarPreviewHandler={setAvatarPreviewHandler}
      />
      <div>
        <Button
          disabled={pending}
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
  );
}

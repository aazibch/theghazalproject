'use client';

import { useEffect, useRef, useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

import { SessionUser } from '@/types';
import { updateProfileSettingsSchema } from '@/lib/schemas';
import { updateProfileSettings } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import AvatarFileInput from './avatar-file-input';
import { DEFAULT_PROFILE_PICTURE } from '@/constants';

interface ProfileSettingsFormProps {
  user: {
    fullName: SessionUser['fullName'];
    username: SessionUser['username'];
    profilePicture: SessionUser['profilePicture'];
  };
}

interface FormErrors {
  fullName?: string;
  username?: string;
}

export default function ProfileSettingsForm({
  user
}: ProfileSettingsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isProfilePictureRemoved, setIsProfilePictureRemoved] =
    useState<boolean>(false);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    DEFAULT_PROFILE_PICTURE
  );

  const { update, data: session } = useSession();
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

  const resetAvatarFileInput = (updatedAvatarPreview: string) => {
    avatarInputRef.current!.value = '';
    setAvatarPreview(updatedAvatarPreview);
  };

  const validate = (values: FormErrors) => {
    const validationErrors: FormErrors = {};

    const { error } = updateProfileSettingsSchema.validate(values, {
      abortEarly: false
    });

    if (error) {
      for (let x of error.details) {
        if (x.context?.label) {
          validationErrors[x.context.label as keyof FormErrors] = x.message;
        }
      }
    }

    return validationErrors;
  };

  interface UpdatesObj {
    fullName?: string;
    profilePicture?: File;
  }

  const formik = useFormik({
    initialValues: {
      fullName: user.fullName
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const { fullName } = values;
      const newProfilePicture = avatarInputRef.current!.files?.[0];

      const updates: UpdatesObj = {};

      if (fullName !== user.fullName) {
        updates['fullName'] = fullName;
      }

      if (newProfilePicture) {
        updates['profilePicture'] = newProfilePicture;
      }

      setIsSubmitting(true);

      if (isProfilePictureRemoved) {
        await updateProfileSettings(updates, true);
      } else {
        await updateProfileSettings(updates);
      }

      const updatedSession = await update();
      resetAvatarFileInput(updatedSession!.user.profilePicture);

      setIsSubmitting(false);
    }
  });

  return (
    <form
      method="post"
      onSubmit={formik.handleSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
          name="fullName"
          id="fullName"
          type="text"
          required
          value={formik.values.fullName}
          onChange={formik.handleChange}
          color={formik.errors.fullName && 'failure'}
          helperText={formik.errors.fullName && formik.errors.fullName}
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
          disabled={isSubmitting}
          className="float-end px-5"
          color="blue"
          type="submit"
        >
          {isSubmitting ? (
            <Spinner size="sm" aria-label="loading spinner" />
          ) : (
            'Save'
          )}
        </Button>
      </div>
    </form>
  );
}

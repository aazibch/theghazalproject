'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Button,
  FileInput,
  Label,
  Spinner,
  TextInput
} from 'flowbite-react';
import { useFormik } from 'formik';

import { SessionUser } from '@/types';
import { updateProfileSettingsSchema } from '@/lib/schemas';
import { updateProfileSettings } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import AvatarFileInput from './avatar-file-input';

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
  const { update } = useSession();
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const setIsProfilePictureRemovedHandler = (value: boolean) => {
    setIsProfilePictureRemoved(value);
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

      update();

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
        />
      </div>
      <AvatarFileInput
        setIsProfilePictureRemovedHandler={setIsProfilePictureRemovedHandler}
        avatarInputRef={avatarInputRef}
        userProfilePicture={user.profilePicture}
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

'use client';

import { Avatar, Button, FileInput, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

import { SessionUser } from '@/types';
import { updateProfileSettingsSchema } from '@/lib/schemas';

interface ProfileSettingsFormProps {
  user: {
    fullName?: SessionUser['fullName'];
    username?: SessionUser['username'];
    profilePicture?: SessionUser['profilePicture'];
  };
}

interface FormErrors {
  fullName?: string;
  username?: string;
}

export default function ProfileSettingsForm({
  user
}: ProfileSettingsFormProps) {
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

  const formik = useFormik({
    initialValues: {
      fullName: user.fullName,
      username: user.username
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      console.log(values);
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
          value={formik.values.username}
          onChange={formik.handleChange}
          color={formik.errors.username && 'failure'}
          helperText={formik.errors.username && formik.errors.username}
        />
      </div>
      <div className="flex">
        <div className="shrink-0 flex flex-col mr-4">
          <Avatar
            img={user.profilePicture}
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

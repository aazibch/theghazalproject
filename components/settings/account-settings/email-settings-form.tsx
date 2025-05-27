'use client';

import { useState } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

import { SessionUser } from '@/types';
import { updateAccountEmailSettingsSchema } from '@/lib/schemas';

interface EmailSettingsFormProps {
  user: {
    email: SessionUser['email'];
  };
}

interface FormErrors {
  email?: string;
}

export default function EmailSettingsForm({ user }: EmailSettingsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (values: FormErrors) => {
    const validationErrors: FormErrors = {};
    const { error } = updateAccountEmailSettingsSchema.validate(values, {
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
      email: user.email
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {}
  });

  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Email Address</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          name="Email"
          id="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          color={formik.errors.email && 'failure'}
          helperText={formik.errors.email && formik.errors.email}
        />
      </div>
      <div>
        <Button className="float-end px-5" color="blue" type="submit">
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

// TODO: Consider creating a factory function that generates reusable validate() functions based on the required schema.

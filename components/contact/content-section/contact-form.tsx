import { contactSchema } from '@/lib/schemas';

import { useRef, useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function ContactForm({
  setErrorHandler
}: {
  setErrorHandler: (value: boolean) => void;
}) {
  const [sent, setSent] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (values: FormErrors) => {
    const validationErrors: FormErrors = {};

    const { error } = contactSchema.validate(values, { abortEarly: false });

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
      fullName: '',
      email: '',
      message: ''
    },
    validate: validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      formik.resetForm();

      const encodedValues = encode({
        'form-name': 'contactForm',
        ...values
      });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedValues
      })
        .then(() => {
          setSent(true);
        })
        .catch(() => {
          setErrorHandler(true);
        });
    }
  });

  return (
    <form
      method="post"
      data-netlify="true"
      name="contactForm"
      className="flex max-w-xl flex-col gap-4 mx-auto"
      ref={formRef}
      onSubmit={formik.handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name*" />
        </div>
        <TextInput
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email*" />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Message*" />
        </div>
        <Textarea
          id="message"
          name="message"
          required
          rows={15}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-2 text-sm">
        <p>Fields marked with an asterisk (*) are mandatory.</p>
      </div>
      <Button type="submit" color="blue">
        Send
      </Button>
    </form>
  );
}

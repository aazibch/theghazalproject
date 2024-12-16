import { useState } from 'react';
import { Button, Modal, Spinner, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

import { submitColGhazalCouplet } from '@/lib/actions';
import { colGhazalEntrySchema } from '@/lib/schemas';
import Link from 'next/link';

interface FormErrors {
  lineOne?: string;
  lineTwo?: string;
}

export default function ColGhazalContributeForm({
  isSuccess,
  setIsSuccessHandler,
  setOpenContributeModalHandler
}: {
  isSuccess: boolean;
  setIsSuccessHandler: (value: boolean) => void;
  setOpenContributeModalHandler: (value: boolean) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (values: FormErrors) => {
    const validationErrors: FormErrors = {};

    const { error } = colGhazalEntrySchema.validate(values, {
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
      lineOne: '',
      lineTwo: ''
    },
    validate: validate,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const res = await submitColGhazalCouplet(values);

      if (res.status === 'success') {
        setIsSuccessHandler(true);
      }

      setIsSubmitting(false);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body className="flex items-center justify-center">
          <div className="space-y-6">
            <div className="text-base leading-relaxed text-gray-500 space-y-2">
              <p>
                To maintain a sense of balance, the two lines of your couplet
                should be roughly equal in length. To aid contributors in
                achieving this balance, we require each line of your entry to be
                at least 30 characters and no more than 60 characters in length.
              </p>
              <p>
                Before submitting, we recommend that you read this{' '}
                <Link
                  href="/articles/instructions-on-contributing-collective-ghazal"
                  target="_blank"
                >
                  short article
                </Link>{' '}
                for instructions and tips on contributing.
              </p>
              <p>
                To learn more about the ghazal and its variants, see this{' '}
                <Link
                  href="/articles/how-to-write-english-ghazal"
                  target="_blank"
                >
                  article
                </Link>
                .
              </p>
            </div>

            <div>
              <TextInput
                className="mb-4"
                type="text"
                placeholder="Line 1"
                name="lineOne"
                value={formik.values.lineOne}
                onChange={formik.handleChange}
                color={formik.errors.lineOne && 'failure'}
                helperText={formik.errors.lineOne}
              />
              <TextInput
                type="text"
                placeholder="Line 2"
                name="lineTwo"
                value={formik.values.lineTwo}
                onChange={formik.handleChange}
                color={formik.errors.lineTwo && 'failure'}
                helperText={formik.errors.lineTwo}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!isSuccess && (
            <Button
              className="w-20"
              disabled={isSubmitting}
              color="blue"
              type="submit"
            >
              {isSubmitting ? (
                <Spinner size="sm" aria-label="loading spinner" />
              ) : (
                <span>Submit</span>
              )}
            </Button>
          )}

          <Button
            color="gray"
            onClick={() => setOpenContributeModalHandler(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
}

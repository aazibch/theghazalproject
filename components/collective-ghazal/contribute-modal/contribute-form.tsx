import { useActionState, useEffect, useState } from 'react';
import { Button, Modal, Spinner, TextInput } from 'flowbite-react';

import { submitColGhazalCouplet } from '@/lib/actions';
import Link from 'next/link';

interface FormErrors {
  lineOne?: string;
  lineTwo?: string;
}

export default function ContributeForm({
  isSuccess,
  setIsSuccessHandler,
  setOpenContributeModalHandler
}: {
  isSuccess: boolean;
  setIsSuccessHandler: (value: boolean) => void;
  setOpenContributeModalHandler: (value: boolean) => void;
}) {
  const [formState, formAction, pending] = useActionState(
    submitColGhazalCouplet,
    {
      isSuccess: null,
      formFields: {
        lineOne: '',
        lineTwo: ''
      }
    }
  );

  useEffect(() => {
    if (formState.isSuccess && !pending) {
      setIsSuccessHandler(true);
    }
  }, [formState.isSuccess, pending, setIsSuccessHandler]);

  return (
    <>
      <form action={formAction}>
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
              <div className="mb-4">
                <TextInput
                  type="text"
                  placeholder="Line 1"
                  name="lineOne"
                  defaultValue={formState.formFields.lineOne}
                  color={formState.validationErrors?.lineOne && 'failure'}
                  helperText={formState.validationErrors?.lineOne}
                />
              </div>
              <div>
                <TextInput
                  type="text"
                  placeholder="Line 2"
                  name="lineTwo"
                  defaultValue={formState.formFields.lineTwo}
                  color={formState.validationErrors?.lineTwo && 'failure'}
                  helperText={formState.validationErrors?.lineTwo}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!isSuccess && (
            <Button
              className="w-20"
              disabled={pending}
              color="blue"
              type="submit"
            >
              {pending ? (
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

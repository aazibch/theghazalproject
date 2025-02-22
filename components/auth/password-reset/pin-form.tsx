'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import FormSubmitButton from '@/components/ui/form-submit-button';
import { submitPinForPasswordReset } from '@/lib/actions';
import { PasswordResetStage } from '@/types';

export default function PinForm({
  setStageHandler
}: {
  setStageHandler: (value: PasswordResetStage) => void;
}) {
  const [formState, formAction] = useFormState(submitPinForPasswordReset, {
    status: null
  });

  const { status } = formState;

  useEffect(() => {
    if (status === 'success') {
      setStageHandler('password');
    }
  }, [status]);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    if (value.match(/^\d$/)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = '';
    }
  };

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 mx-auto">
      <p className="text-sm">
        Please enter the 6-digit code we sent to your email address to recover
        your account.
      </p>
      <div className="mb-2 flex space-x-2 rtl:space-x-reverse justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            name={`pin-${index}`}
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            onChange={(e) => handleChange(index, e)}
            required
          />
        ))}
      </div>
      <FormSubmitButton />
    </form>
  );
}

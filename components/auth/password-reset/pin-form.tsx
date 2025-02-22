'use client';

import { useRef } from 'react';
import { Button } from 'flowbite-react';

export default function PinForm() {
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
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <p className="text-sm">
        Please enter the 6-digit code we sent to your email address to recover
        your account.
      </p>
      <div className="mb-2 flex space-x-2 rtl:space-x-reverse justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
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
      <div className="flex flex-row-reverse">
        <Button color="blue">Submit</Button>
      </div>
    </form>
  );
}

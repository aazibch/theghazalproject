'use client';

import { useRef } from 'react';
import { Button } from 'flowbite-react';

export default function PasswordResetCodeForm() {
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
              inputRefs.current[index] = el; // Store reference
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

        {/* <div>
          <label htmlFor="code-1" className="sr-only">
            First code
          </label>
          <input
            pattern="[0-9]*"
            inputMode="numeric"
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-next="code-2"
            id="code-1"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-2" className="sr-only">
            Second code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-1"
            data-focus-input-next="code-3"
            id="code-2"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-3" className="sr-only">
            Third code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-2"
            data-focus-input-next="code-4"
            id="code-3"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-4" className="sr-only">
            Fourth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-3"
            data-focus-input-next="code-5"
            id="code-4"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-5" className="sr-only">
            Fifth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-4"
            data-focus-input-next="code-6"
            id="code-5"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>
        <div>
          <label htmlFor="code-6" className="sr-only">
            Sixth code
          </label>
          <input
            type="text"
            maxLength={1}
            data-focus-input-init
            data-focus-input-prev="code-5"
            id="code-6"
            className="block w-9 h-9 py-3 text-sm font-bold text-center text-gray-600 bg-white border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div> */}
      </div>
      <div className="flex flex-row-reverse">
        <Button color="blue">Submit</Button>
      </div>
    </form>
  );
}

import { InputCounter } from 'flowbite';
import { Button, TextInput } from 'flowbite-react';

export default function PasswordResetCodeForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <p className="text-sm">
        Please enter the 6-digit code we sent to your email address.
      </p>
      <div className="mb-2 flex space-x-2 rtl:space-x-reverse justify-center">
        <div>
          <label htmlFor="code-1" className="sr-only">
            First code
          </label>
          <input
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
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Button color="blue">Submit</Button>
      </div>
    </form>
  );
}

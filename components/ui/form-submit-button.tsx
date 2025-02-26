import { useFormStatus } from 'react-dom';
import { Button, Spinner } from 'flowbite-react';

export default function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end">
      <Button type="submit" disabled={pending} color="blue">
        {pending ? (
          <Spinner size="sm" aria-label="loading spinner" />
        ) : (
          'Submit'
        )}
      </Button>
    </div>
  );
}

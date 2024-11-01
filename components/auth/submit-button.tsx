import { useFormStatus } from 'react-dom';
import { Button, Spinner } from 'flowbite-react';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button color="blue" type="submit">
      {pending ? (
        <Spinner size="sm" aria-label="loading spinner" />
      ) : (
        <span>Submit</span>
      )}
    </Button>
  );
}

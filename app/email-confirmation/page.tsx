import { confirmEmail } from '@/lib/auth';

export default async function EmailConfirmationPage({
  searchParams
}: {
  searchParams: Record<string, any>;
}) {
  const { token } = searchParams;

  if (token) {
    await confirmEmail(token);
  }

  return <p>Email Confirmation Page.</p>;
}

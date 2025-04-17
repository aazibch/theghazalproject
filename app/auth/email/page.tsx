import EmailSuccessScreen from '@/components/email/email-success-screen';
import { confirmEmail } from '@/lib/auth';

export default async function EmailConfirmationPage({
  searchParams
}: {
  searchParams: Promise<Record<string, any>>;
}) {
  const token = (await searchParams).token;

  await confirmEmail(token);

  return <EmailSuccessScreen />;
}

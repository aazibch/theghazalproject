import PageHeader from '@/components/layout/pages/page-header';
import SignupForm from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <div className="container mx-auto mt-12 mb-28">
      <PageHeader heading="Signup" />
      <SignupForm />
    </div>
  );
}

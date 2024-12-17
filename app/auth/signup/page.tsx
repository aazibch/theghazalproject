import PageHeader from '@/components/layout/pages/page-header';
import SignupForm from '@/components/auth/signup-form';
import PageContainer from '@/components/layout/pages/page-container';

export default function SignupPage() {
  return (
    <PageContainer>
      <PageHeader heading="Signup" />
      <SignupForm />
    </PageContainer>
  );
}

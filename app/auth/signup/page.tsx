import PageHeader from '@/components/layout/pages/page-header';
import SignupForm from '@/components/auth/signup-form';
import PageContainer from '@/components/layout/pages/page-container';

export const metadata = {
  title: 'Signup | The Ghazal Project'
};

export default function SignupPage() {
  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Signup" />
        <SignupForm />
      </div>
    </PageContainer>
  );
}

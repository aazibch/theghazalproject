import PageHeader from '@/components/layout/pages/page-header';
import LoginForm from '@/components/auth/login-form';
import PageContainer from '@/components/layout/pages/page-container';

export default function LoginPage() {
  return (
    <PageContainer>
      <PageHeader heading="Login" />
      <LoginForm />
    </PageContainer>
  );
}

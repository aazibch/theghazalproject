import PageHeader from '@/components/layout/pages/page-header';
import LoginForm from '@/components/auth/login-form';
import PageContainer from '@/components/layout/pages/page-container';

export const metadata = {
  title: 'Login | The Ghazal Project'
};

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Login" />
        <LoginForm />
      </div>
    </PageContainer>
  );
}

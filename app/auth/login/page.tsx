import PageHeader from '@/components/layout/pages/page-header';
import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="container mx-auto mt-12 mb-28">
      <PageHeader heading="Login" />
      <LoginForm />
    </div>
  );
}

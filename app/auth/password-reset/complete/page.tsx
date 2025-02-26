import PageContainer from '@/components/layout/pages/page-container';
import PasswordForm from '@/components/auth/password-reset/password-form/password-form';
import PageHeader from '@/components/layout/pages/page-header';

export const metadata = {
  title: 'Password Reset | The Ghazal Project',
  description:
    'Trouble accessing your account? No problem, we are here to help you reset your password.'
};

export default function PasswordResetPage() {
  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        <PasswordForm />
      </div>
    </PageContainer>
  );
}

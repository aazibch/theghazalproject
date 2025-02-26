import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import EmailForm from '@/components/auth/password-reset/email-form/email-form';

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
        <EmailForm />
      </div>
    </PageContainer>
  );
}

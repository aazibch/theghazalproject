import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import EmailForm from '@/components/auth/password-reset/email-form/email-form';

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

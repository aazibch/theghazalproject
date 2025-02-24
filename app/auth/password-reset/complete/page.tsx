import PageContainer from '@/components/layout/pages/page-container';
import PasswordForm from '@/components/auth/password-reset/password-form';
import PageHeader from '@/components/layout/pages/page-header';

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

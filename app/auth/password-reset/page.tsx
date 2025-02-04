import { Button, Label, TextInput } from 'flowbite-react';

import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import PasswordResetEmailForm from '@/components/auth/password-reset-email-form';
import PasswordResetCodeForm from '@/components/auth/password-reset-code-form';

export default function PasswordResetPage() {
  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        {/* <PasswordResetEmailForm /> */}
        <PasswordResetCodeForm />
      </div>
    </PageContainer>
  );
}

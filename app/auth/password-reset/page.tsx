'use client';

import { useState } from 'react';

import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import EmailForm from '@/components/auth/password-reset/email-form';
import PinForm from '@/components/auth/password-reset/pin-form';
import { PasswordResetStage } from '@/types';

export default function PasswordResetPage() {
  const [stage, setStage] = useState<PasswordResetStage>('email');

  const setStageHandler = (value: PasswordResetStage) => {
    setStage(value);
  };

  let formElement = <EmailForm setStageHandler={setStageHandler} />;

  if (stage === 'pin') {
    formElement = <PinForm setStageHandler={setStageHandler} />;
  }

  if (stage === 'password') {
    formElement = <p>New password form</p>;
  }

  return (
    <PageContainer>
      <div className="pb-28">
        <PageHeader heading="Password Reset" />
        {formElement}
      </div>
    </PageContainer>
  );
}

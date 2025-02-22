'use client';

import { useState } from 'react';

import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import EmailForm from '@/components/auth/password-reset/email-form';
import PinForm from '@/components/auth/password-reset/pin-form';
import { Stage } from '@/types';

export default function PasswordResetPage() {
  const [stage, setStage] = useState<Stage>('email');

  const setStageHandler = (value: Stage) => {
    setStage(value);
  };

  let formElement = <EmailForm setStageHandler={setStageHandler} />;

  if (stage === 'pin') {
    formElement = <PinForm />;
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

'use client';

import { useState } from 'react';

import ContentSection from './content-section/content-section';
import PageContainer from '../layout/pages/page-container';
import PageHeader from '../layout/pages/page-header';
import AboutSection from './about-section';
import ServerErrorScreen from '../error/server-error-screen';

export default function ContactPageContainer() {
  const [error, setError] = useState<boolean>(false);

  const setErrorHandler = (value: boolean) => {
    setError(value);
  };

  if (error) {
    return <ServerErrorScreen />;
  }

  return (
    <PageContainer>
      <PageHeader heading="Contact" />
      <ContentSection setErrorHandler={setErrorHandler} />
      <AboutSection />
    </PageContainer>
  );
}

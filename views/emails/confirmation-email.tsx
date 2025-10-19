import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Link
} from '@react-email/components';
import * as React from 'react';

interface ConfirmationEmailProps {
  fullName: string;
  url: string;
}

const baseUrl = process.env.PRODUCTION_URL;

export const ConfirmationEmail = ({
  fullName,
  url
}: ConfirmationEmailProps) => (
  <Html>
    <Head>
      <Link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Preview>
      You either created a new account or changed your email address at The
      Ghazal Project. To enjoy all the features on the platform, please confirm
      your email.
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <div className="text-center">
            <img
              src={`${baseUrl}/images/logo.png`}
              width={200}
              height="auto"
              alt="The Ghazal Project Logo"
            />
          </div>

          <Text style={paragraph}>Hi {fullName},</Text>
          <Text style={paragraph}>
            You either created a new account or changed your email address at{' '}
            <Link href={baseUrl}>The Ghazal Project</Link>.
          </Text>
          <Text style={paragraph}>
            To enjoy all the features on the platform, please confirm your
            email.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={url}>
              Confirm Email
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Team at The Ghazal Project
          </Text>
          <Hr style={hr} />
          <Text className="text-center" style={footer}>
            theghazalproject.com
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

ConfirmationEmail.PreviewProps = {
  fullName: 'John Doe'
} as ConfirmationEmailProps;

export default ConfirmationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
};

const logo = {
  fontFamily: '"Crimson Text", serif'
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
};

const btnContainer = {
  textAlign: 'center' as const
};

const button = {
  backgroundColor: '#1a56db',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px'
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
};

const footer = {
  color: '#8898aa',
  fontSize: '12px'
};

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
  Link
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  fullName: string;
}

const baseUrl = process.env.PRODUCTION_URL;

export const WelcomeEmail = ({ fullName }: WelcomeEmailProps) => (
  <Html>
    <Head>
      <Link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Preview>
      We're glad to have you join us. At The Ghazal Project, you can learn about
      the art of ghazal-writing, meet fellow poets, and share your own verses
      with the community.
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

          <Text style={text}>Hi {fullName},</Text>
          <Text style={text}>
            We're glad to have you join us. At{' '}
            <Link href={baseUrl}>The Ghazal Project</Link>, you can learn about
            the art of ghazal-writing, meet fellow poets, and share your own
            verses with the community.
          </Text>
          <Text style={text}>Here's what you can do next:</Text>
          <ul className="list-disc" style={text}>
            <li>
              <Link href={`${baseUrl}articles/how-to-write-english-ghazal`}>
                Learn to write the English Ghazal in three different variants
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}collective-ghazal`}>
                Contribute to the Collective Ghazal
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}articles/brief-history-ghazal`}>
                Explore the rich history of the ghazal form
              </Link>
            </li>
          </ul>
          <Text style={text}>
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

WelcomeEmail.PreviewProps = {
  fullName: 'John Doe'
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
};

const text = {
  fontSize: '16px',
  lineHeight: '26px'
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
};

const footer = {
  color: '#8898aa',
  fontSize: '12px'
};

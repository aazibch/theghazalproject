import type { Metadata } from 'next';
import { Inter, Crimson_Text, Merriweather } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/layout';
import AuthProvider from '@/components/auth/auth-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter'
});

export const crimson_text = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-crimson_text'
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--font-merriweather'
});

export const metadata: Metadata = {
  title: 'The Ghazal Project - Learn to write the English ghazal',
  description:
    'Learn about the ghazal, its rich history, and share your own verses with the world.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimson_text.variable} ${merriweather.variable}`}
      >
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}

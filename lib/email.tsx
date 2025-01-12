import React, { ReactNode } from 'react';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';

import ConfirmationEmail from '@/views/emails/confirmation-email';

export default class Email {
  private recipientEmail: string;
  private recipientFullName: string;
  private url: string;
  private sender: string;

  constructor(user: { email: string; fullName: string }, url: string) {
    this.recipientEmail = user.email;
    this.recipientFullName = user.fullName;
    this.url = url;
    this.sender = `The Ghazal Project <${process.env.SMTP_SENDER}>`;
  }

  private newTransport() {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  private async send(template: ReactNode, subject: string) {
    // 1) Render HTML from JSX
    const html = await render(
      <ConfirmationEmail fullName={this.recipientFullName} url={this.url} />
    );

    // 2) Define email options
    const mailOptions = {
      from: this.sender,
      to: this.recipientEmail,
      subject,
      html
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendEmailConfirmation() {
    await this.send('confirmEmail', 'Confirm Your Email Address');
  }
}

import nodemailer from 'nodemailer';
import pug from 'pug';
import { convert as convertHtmlToText } from 'html-to-text';

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

  private async send(template: any, subject: any) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      `${process.cwd()}/views/email/${template}.pug`,
      {
        fullName: this.recipientFullName,
        siteUrl: process.env.PRODUCTION_URL,
        url: this.url,
        subject
      }
    );

    // 2) Define email options
    const mailOptions = {
      from: this.sender,
      to: this.recipientEmail,
      subject,
      html,
      text: convertHtmlToText(html)
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendEmailConfirmation() {
    await this.send('confirmEmail', 'Confirm Your Email Address');
  }
}

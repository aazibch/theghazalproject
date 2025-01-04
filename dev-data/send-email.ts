import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

import nodemailer from 'nodemailer';
import pug from 'pug';
import { convert as convertHtmlToText } from 'html-to-text';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const html = pug.renderFile(`${__dirname}/../views/email/confirmEmail.pug`, {
  fullName: 'John Doe',
  siteUrl: process.env.PRODUCTION_URL,
  url: process.env.PRODUCTION_URL,
  subject: 'Confirm Your Email Address'
});

const mailOptions = {
  from: `"The Ghazal Project" <${process.env.SMTP_SENDER}>`, // sender address
  to: process.env.EMAIL_RECIPIENT, // list of receivers
  subject: 'Welcome to The Ghazal Project', // Subject line
  text: convertHtmlToText(html), // plain text body
  html: html
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});

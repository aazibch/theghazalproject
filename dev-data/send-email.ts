import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const mailOptions = {
  from: '"Admin" <admin@trial-pq3enl6o315l2vwr.mlsender.net>', // sender address
  to: 'aazibsdreamscape@gmail.com', // list of receivers
  subject: 'Welcome to The Ghazal Project', // Subject line
  text: "Hey there! Welcome to The Ghazal Project, we're happy to have you here! All you need to do is head to your account, log in and start playing. Remember to check out our guides and contact support if you need anything. Regards, The Ghazal Project", // plain text body
  html: `
    <p>Hey there!</p>
    <p>Welcome to The Ghazal Project, we're happy to have you here!</p>
    <p>All you need to do is head to your account, log in and start playing.</p>
    <p>Remember to check out our guides and contact support if you need anything.</p>
    <br>
    <p>Regards,</p>
    <p>The Ghazal Project</p>
  ` // html body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});

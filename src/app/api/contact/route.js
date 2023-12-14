import { NextResponse } from 'next/server';
// const dotenv = require('dotenv');

// dotenv.config();

export async function POST(req) {
  const data = await req.json();
  let nodemailer = require('nodemailer');
  console.log(process.env.SMTP_USER);
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: 'mqll qtjl pwnt apmd'
    },
    secure: true
  });
  const mailData = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_TO,
    subject: `${data.subject} - DE: ${data.email}`,
    text: data.message
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log('Error', err);
    else console.log(info);
  });
  return NextResponse.json(data);
}

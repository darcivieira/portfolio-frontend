import { NextResponse } from 'next/server';
const dotenv = require('dotenv');

dotenv.config();

export async function POST(req, res) {
  console.log(req.body);
  // let nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({
  //   port: process.env.SMTP_PORT,
  //   host: process.env.SMTP_HOST,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASSWORD
  //   },
  //   secure: true
  // });
  // const mailData = {
  //   from: process.env.SMTP_USER,
  //   to: 'darcivieira.junior@gmail.com',
  //   subject: `Message From ${req.body.subject}`,
  //   text: req.body.message,
  //   html: <div>{req.body.message}</div>
  // };
  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });
  res.status(200);
}

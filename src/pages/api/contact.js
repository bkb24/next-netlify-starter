import nodemailer from 'nodemailer'
import { render } from "@react-email/render";

// import { sendEmail } from '@/lib/email.js';
import ContactEmail from "@/emails/ContactEmail";

const smtpOptions = {
  host: "smtp.gmail.com",
  port: 465,
  // host: "sandbox.smtp.mailtrap.io",
  // port: 2525,

  // host: "mailhound.co.uk",
  // port: 25,

  // secure: false,
  auth: {
    user: "dompeyreton@gmail.com",
    pass: "p4ssw0rd##",

    // user: "b428ec97876f20",
    // pass: "3f14db7a3b301b",

    // user: 'gites@mailhound.co.uk',
    // pass: 'tB30nq?04',
  },
}

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}

export default function handler(req, res) {
  let body = req.body

  sendEmail({
    to: "mihail@twenty-o-two.co.uk, bkb24@abv.bg",
    subject: "Contact",
    html: render(ContactEmail({ name: body.name, email: body.email, message: body.message })),
  })
  .then(response => {
    return res.status(200).json({ message: "Email sent successfully" });
  })
  .catch(error => {
    console.log('error', error)
    return res.status(502).json({ message: "Email sending error", error });
  })
}

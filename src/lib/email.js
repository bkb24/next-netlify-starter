import nodemailer from 'nodemailer'

const smtpOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: "dompeyreton@gmail.com",
      pass: "p4ssw0rd##",
    },
}

export const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    })

    return await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      ...data,
    })
}

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7bd0c57b70354c",
      pass: "dd3cc28d6f43f1"
    }
  });

export const sendMail = (message: object): void=>{
    transporter.sendMail(message)
}

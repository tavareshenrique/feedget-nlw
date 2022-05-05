import nodemailer from 'nodemailer';

import { ISendMailData, MailAdapter } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7fd89964e981a0",
    pass: "d5025d2da63b19"
  }
});

export class NodemailerMaiLAdapter implements MailAdapter {
  async sendMail({ body, subject }: ISendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Henrique Tavares <ihenrits@gmail.com>",
    subject,
    html: body,
  })
  }
}
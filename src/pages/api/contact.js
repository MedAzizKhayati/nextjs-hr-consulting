import variableToName from '@utils/variableToName';
import contactTemplate from './views/contact.template';
import checkEntries from './checkEntries';
import { transporter } from './nodemailer.config';
require('dotenv').config();

const keys = ['firstName', 'lastName', 'email', 'phonenumber', 'message'];

export default function (req, res) {
  const { body } = req;

  const missingField = checkEntries(body, keys);
  if (missingField) {
    return res
      .status(400)
      .send({ error: `${variableToName(missingField)} is required!` });
  }

  const mailData = {
    to: process.env.SMTP_DEFAULT_TO,
    from: body?.email,
    subject: '[ Contact Form ]',
    html: contactTemplate(body)
  };

  console.log('Sending Email...');

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(500).send(err);
      return console.log(err);
    }
    res.status(200).send(info);
  });
}

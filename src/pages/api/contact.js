import contactTemplate from '@views/contact.template';
import { transporter } from './nodemailer.config';
require('dotenv').config();

export default function (req, res) {
  const { body } = req;
  const mailData = {
    to: process.env.SMTP_DEFAULT_TO,
    from: body?.email,
    subject: '[ Application Form - Resume ]',
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

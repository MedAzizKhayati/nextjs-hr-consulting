import { transporter } from './nodemailer.config';
import resumeTemplate from './views/resume.template';
import checkEntries from './checkEntries';
import variableToName from '@utils/variableToName';
require('dotenv').config();

const keys = [
  'firstName',
  'lastName',
  'email',
  'phonenumber',
  'studyField',
  'formationField',
  'file'
];

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
    subject: '[ Application Form - Resume ]',
    html: resumeTemplate(body),
    attachments: [body?.file]
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb'
    }
  }
};

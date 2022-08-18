import { transporter } from './nodemailer.config';
require('dotenv').config();

export default function (req, res) {
  const { body } = req;
  const mailData = {
    to: process.env.SMTP_DEFAULT_TO,
    from: body?.email,
    subject: '[ Application Form - Resume ]',
    html: `
      <div style="padding: 15px;">
        <h1 style="text-align:center;">${body?.firstName} ${body?.lastName} </h1>
        <h4>Phone Number: ${body?.phonenumber}</h4>
        <br>
        <ul>
            <li><strong>Email:</strong> ${body?.email}</li>
            <li><strong>Field Of Study:</strong> ${body?.studyField}</li>
            <li><strong>Formation Domain:</strong> ${body?.formationField}</li>
        </ul>
        <br>
        <h4>Message:</h4>
        <p>${body?.message}</p>
      </div>
      `,
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

import { transporter } from './nodemailer.config';

export default function (req, res) {
  const mailData = {
    to: 'support@redlionandcompany.com',
    from: 'mohamedazizkhayati@gmail.com',
    subject: '[ Resume Form - CV ]',
    text: 'This is my resume.',
    html: `
      <div style="border-radius: 5px; background-color:red;">
          <h1 style="color:blue;">This is a test example</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      `,
    attachments: [req?.body?.file]
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(info);
  });
}

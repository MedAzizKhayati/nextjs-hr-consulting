import axios from 'axios';

require('dotenv').config();
const API_URL = process.env.NEWSLETTER_API_URL;
const CLIENT_KEY = process.env.NEWSLETTER_CLIENT_KEY;
const CLIENT_SECRET = process.env.NEWSLETTER_CLIENT_SECRET;

export default function (req, res) {
  const { email } = req?.body || {};
  if (!email)
    return res.status(400).json({ error: 'Address e-mail est obligatoire!' });
  axios
    .post(
      API_URL + '/subscribers',
      {
        email: email,
        status: 'confirmed'
      },
      {
        params: {
          client_key: CLIENT_KEY,
          client_secret: CLIENT_SECRET
        }
      }
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error?.response?.data || error?.response || error);
      res.status(500).send(error);
    });
}

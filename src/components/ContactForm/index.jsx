import { Stack } from '@chakra-ui/react';
import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import FormTextArea from '@components/FormTextArea';
import { useState } from 'react';
import axios from 'axios';
import handleHttpRequest from '@utils/handleHttpRequest';

export default function ContactForm(props) {
  const [formData, setFormData] = useState({});

  const sendContact = () => {
    handleHttpRequest(
      axios.post('/api/contact', formData),
      'Votre message a bien été envoyé'
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <CustomForm
      onChange={handleChange}
      onSubmit={sendContact}
      title="Contact"
      {...props}
    >
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput name="firstName" placeholder="Nom" />
        <FormInput name="lastName" placeholder="Prénom" />
      </Stack>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput
          name="phonenumber"
          type="number"
          placeholder="Numéro de télephone"
        />
        <FormInput name="email" type="email" placeholder="E-mail" />
      </Stack>
      <FormTextArea name="message" placeholder="Message" />
    </CustomForm>
  );
}

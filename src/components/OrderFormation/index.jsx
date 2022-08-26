import { Stack } from '@chakra-ui/react';
import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import FormTextArea from '@components/FormTextArea';
import { useState } from 'react';
import axios from 'axios';
import handleHttpRequest from '@utils/handleHttpRequest';

export default function OrderFormation({formationTitle, ...props}) {
  const [formData, setFormData] = useState({});

  const sendContact = () => {
    handleHttpRequest(
      axios.post('/api/order-formation', {...formData, formationTitle}),
      'Votre requète a bien été envoyé! On vous contactera dans les plus brefs délais.'
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
      title="Demande De Devis"
      {...props}
    >
      <Stack direction={['column', 'row']} mb={[10, 20]} spacing={[10, 20]}>
        <FormInput name="firstName" placeholder="Nom" />
        <FormInput name="lastName" placeholder="Prénom" />
      </Stack>
      <Stack direction={['column', 'row']} mb={[10, 20]} spacing={[10, 20]}>
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

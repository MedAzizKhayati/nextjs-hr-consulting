import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import { Stack } from '@chakra-ui/react';
import FormTextArea from '@components/FormTextArea';
import { useState } from 'react';
import handleHttpRequest from '@utils/handleHttpRequest';
import axios from 'axios';

export default function CustomFormation(props) {
  const [formData, setFormData] = useState({});

  const sendContact = () => {
    handleHttpRequest(
      axios.post('/api/custom-formation', formData),
      'Votre requète a bien été envoyé'
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
      title="Formation sur-mesure"
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
      <FormInput name="company" placeholder="Entreprise (SELF si particulier)" mb={20} />
      <FormInput
        name="customFormation"
        placeholder="Formation Souhaitée (Titre de la formation)"
        mb={20}
      />
      <FormTextArea placeholder="Message" />
    </CustomForm>
  );
}

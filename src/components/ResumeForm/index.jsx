import { Stack, Text } from '@chakra-ui/react';
import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import FormTextArea from '@components/FormTextArea';
import axios from 'axios';
import { useState } from 'react';
import toBase64 from '@utils/toBase64';
import { toast } from 'react-toastify';
import handleHttpRequest from '@utils/handleHttpRequest';

export default function ResumeForm() {
  const [formData, setFormData] = useState({});

  const sendResume = () => {
    handleHttpRequest(
      axios.post('/api/send-resume', formData),
      'Votre CV a bien été envoyé',
      'Envoi en cours...'
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (!files) {
      setFormData({ ...formData, [name]: value });
      return;
    }

    toBase64(files[0])
      .then((base64) => {
        setFormData({
          ...formData,
          file: {
            filename: files[0].name,
            path: base64
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CustomForm
      onChange={handleChange}
      onSubmit={sendResume}
      title="Formulaire d'envoie d'un CV"
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
      <FormInput
        name="studyField"
        placeholder="Votre domaine d'étude"
        mb={[10, 20]}
      />
      <FormInput
        name="formationField"
        placeholder="Votre domaine de formation"
        mb={[10, 20]}
      />
      <Text fontWeight="bold" mb={1} color="green.400" opacity="0.7">
        Ajouter votre cv ici (pdf, doc, png)
      </Text>
      <FormInput
        name="file"
        type="file"
        color="green.400"
        opacity="0.7"
        placeholder="Ajouter votre cv ici (pdf, doc, png)"
        mb={[10, 20]}
      />
      <FormTextArea name="message" placeholder="Message" />
    </CustomForm>
  );
}

import { Stack, Text } from '@chakra-ui/react';
import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import FormTextArea from '@components/FormTextArea';

export default function ResumeForm() {
  return (
    <CustomForm title="Formulaire d'envoie d'un CV">
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput placeholder="Nom" />
        <FormInput placeholder="Prénom" />
      </Stack>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput type="number" placeholder="Numéro de télephone" />
        <FormInput type="email" placeholder="E-mail" />
      </Stack>
      <FormInput placeholder="Votre domaine d'étude" mb={20} />
      <FormInput placeholder="Votre domaine de formation" mb={20} />
      <Text fontWeight="bold" mb={1} color="green.400" opacity="0.7">
        Ajouter votre cv ici (pdf, doc, png)
      </Text>
      <FormInput
        type="file"
        color="green.400"
        opacity="0.7"
        placeholder="Ajouter votre cv ici (pdf, doc, png)"
        mb={20}
      />
      <FormTextArea placeholder="Message" />
    </CustomForm>
  );
}

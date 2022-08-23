import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import { Stack } from '@chakra-ui/react';
import FormSelect from '@components/FormSelect';
import FormTextArea from '@components/FormTextArea';

export default function CustomFormation(props) {
  return (
    <CustomForm title="Formation sur-mesure" {...props}>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput placeholder="Nom" />
        <FormInput placeholder="Prénom" />
      </Stack>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput type="number" placeholder="Numéro de télephone" />
        <FormInput type="email" placeholder="E-mail" />
      </Stack>
      <FormInput placeholder="Entreprise" mb={20} />
      <FormInput placeholder="Formation Souhaitée (Titre explicatoire)" mb={20} />
      <FormTextArea placeholder="Message" />
    </CustomForm>
  );
}

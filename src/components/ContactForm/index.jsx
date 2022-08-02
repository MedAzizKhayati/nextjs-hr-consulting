import { Stack } from '@chakra-ui/react';
import CustomForm from '@components/CustomForm';
import FormInput from '@components/FormInput';
import FormTextArea from '@components/FormTextArea';

export default function ContactForm(props) {
  return (
    <CustomForm title="Contact" {...props}>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput placeholder="Nom" />
        <FormInput placeholder="Prénom" />
      </Stack>
      <Stack direction={['column', 'row']} mb={20} spacing={20}>
        <FormInput type="number" placeholder="Numéro de télephone" />
        <FormInput type="email" placeholder="E-mail" />
      </Stack>
      <FormTextArea placeholder="Message" />
    </CustomForm>
  );
}

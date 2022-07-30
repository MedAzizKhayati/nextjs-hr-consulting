import { Box } from "@chakra-ui/react";
import CustomHeading from "@components/CustomHeading";

export default function About() {
  return (
    <Box px={10}>
      <CustomHeading title={'A propos'} lineWidth={30} />
    </Box>
  )
}

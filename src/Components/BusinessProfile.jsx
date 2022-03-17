import {
  Text,
  VStack,
  Button,
  ButtonGroup,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { globe, mail, linkedIn, twitter } from "../icons/icons";

const BusinessProfile = () => {
  return (
    <HStack padding="2rem" spacing="2rem">
      <img
        src="https://bit.ly/3w2CQzO"
        alt="ashneer"
        style={{
          height: "150px",
          width: "150px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <VStack minWidth={"80vw"}>
        <HStack width="100%" spacing={6}>
          <Text fontSize="3xl" fontWeight={650}>
            BharatPe
          </Text>
          <ButtonGroup colorScheme="pink" size="md">
            <Button variant="solid">Follow</Button>
            <Button variant="outline">Contact</Button>
          </ButtonGroup>
        </HStack>

        <Text width="100%" textAlign="start" fontSize="sm">
          One QR for all payment apps.
        </Text>
        <ButtonGroup
          width="100%"
          size="xs"
          colorScheme="gray.500"
          variant="outline"
        >
          <Button>Fintech</Button>
          <Button>Technology</Button>
          <Button>Unicorn</Button>
        </ButtonGroup>
        <HStack width="100%" padding="1rem 0" fontSize="1.5rem">
          <HStack flexGrow="1">
            <Text fontSize="md">11K Followers</Text>
          </HStack>
          <HStack gap="1rem">
            <Icon as={globe}></Icon>
            <Icon as={mail}></Icon>
            <Icon as={linkedIn}></Icon>
            <Icon as={twitter}></Icon>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default BusinessProfile;

import {
  HStack,
  Flex,
  Text,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Notification = () => {
  return (
    <>
      <Text fontSize={"xl"} paddingTop="1rem">
        Notifications
      </Text>

      <Box padding={"2rem"}>
        <HStack alignItems={"start"} gap={4}>
          <img
            alignItems="start"
            src="https://bit.ly/3qkRbns"
            alt="ashneer"
            style={{
              height: "50px",
              width: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <Flex
            padding="1rem"
            borderRadius={"10px"}
            bg={useColorModeValue("#fff", "gray.800")}
            flexDirection="column"
          >
            <Text fontSize={"md"}>
              Ashneer wants to get in touch with you to discuss about Bharat Pe
            </Text>
            <Box
              padding="10px"
              margin="1rem 0"
              borderRadius={"10px"}
              border="1px solid gray"
              maxWidth="60ch"
            >
              <Text>Hey Anupam,</Text>
              <Text>
                Just came across your profile and really love the work you are
                doing to help fintech companies. I’m working on Bharat Pe and
                would like if you have a look and we can connect on LinkedIn
                later
              </Text>
              <br />
              <Text>Best Wishes,</Text>
              <Text>Ashneer Grover</Text>
            </Box>
          </Flex>
        </HStack>
        <br />
        <FollowNotification />
      </Box>
    </>
  );
};

export default Notification;

const FollowNotification = () => {
  return (
    <>
      <HStack gap={4}>
        <img
          alignItems="start"
          src="https://bit.ly/36dBBDl"
          alt="anupam"
          style={{
            height: "50px",
            width: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <Box
          borderRadius="10px"
          padding="1rem"
          bg={useColorModeValue("#fff", "gray.800")}
        >
          <HStack gap={2}>
            <Text fontSize={"md"}>Anupam started following you.</Text>
            <Button colorScheme={"pink"}>Follow Back</Button>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export { FollowNotification };

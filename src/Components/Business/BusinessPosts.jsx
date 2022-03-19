import React from "react";
import { heart, chat } from "../../icons/icons";
import {
  Text,
  Icon,
  Box,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const UserPosts = ({ postName, postDesc }) => {
  return (
    <VStack>
      <Box
        padding={".8rem"}
        bg={useColorModeValue("#fff", "gray.800")}
        borderRadius={"6px"}
      >
        <Text fontSize="2xl" lineHeight="2">
          {postName}
        </Text>
        <Text fontSize="sm" lineHeight="1.5" marginBottom=".6rem">
          {postDesc}
        </Text>
        <HStack fontSize="1.3rem" gap={2} padding={".5rem .8rem"}>
          <Icon boxSize={"25px"} as={heart} color="pink.500"></Icon>
          <Icon boxSize={"25px"} as={chat}></Icon>
        </HStack>
      </Box>
    </VStack>
  );
};

export default UserPosts;

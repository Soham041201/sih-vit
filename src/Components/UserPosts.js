import React from "react";
import { thumbsUp, chat } from "../icons/icons";
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
    <HStack>
      <VStack fontSize="1.3rem" gap={5} padding={".5rem .8rem"}>
        <Icon boxSize={"25px"} as={thumbsUp}></Icon>
        <Icon boxSize={"25px"} as={chat}></Icon>
      </VStack>
      <Box
        padding={".8rem"}
        bg={useColorModeValue("#fff", "gray.800")}
        borderRadius={"6px"}
      >
        <Text fontSize="xl" lineHeight={1.5}>
          {postName}
        </Text>
        <Text fontSize="sm">{postDesc}</Text>
      </Box>
    </HStack>
  );
};

export default UserPosts;

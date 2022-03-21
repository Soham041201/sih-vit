import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const ProblemLink = ({ problemStat, problemDesc }) => {
  return (
    <VStack align="start" margin={"1rem"}>
      <Text fontSize="2xl" fontWeight={"600"}>
        {problemStat} <ExternalLinkIcon color="pink.500" mx="2px" />
      </Text>

      <Text fontSize="sm">{problemDesc}</Text>
      <Box borderBottom="1px solid #D0D0D0" w="100%"></Box>
    </VStack>
  );
};

export default ProblemLink;

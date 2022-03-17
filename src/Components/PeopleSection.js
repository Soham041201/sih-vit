import React from "react";
import { Circle, HStack, Text, Box, Icon } from "@chakra-ui/react";
import { arrow } from "../icons/icons";

const PeopleSection = ({ name, position }) => {
  return (
    <>
      <HStack w="100%" padding={"1rem"} bg="#fff" borderRadius="10px">
        <Circle width="3.3rem">
          <img src="https://bit.ly/3w2CQzO" alt="bharatPe" />
        </Circle>
        <Box padding={"0.5rem"}>
          <Text fontSize="lg" fontWeight={500}>
            {name}
          </Text>
          <Text fontSize="sm">{position}</Text>
        </Box>
        <Box>
          <Icon as={arrow} align="end"></Icon>
        </Box>
      </HStack>
      <Box borderBottom={"1px solid #D0D0D0"}></Box>
    </>
  );
};

export default PeopleSection;

import React from "react";
import { HStack, Text, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { arrow } from "../icons/icons";

const PeopleSection = ({ imgURL, name, position }) => {
  return (
    <>
      <HStack
        padding="1rem"
        w="100%"
        borderRadius="10px"
        bg={useColorModeValue("#fff", "gray.800")}
      >
        <img
          src={imgURL}
          alt={name}
          style={{
            height: "50px",
            width: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
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

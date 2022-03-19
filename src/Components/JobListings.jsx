import React from "react";
import { HStack, Text, Box,  useColorModeValue } from "@chakra-ui/react";

const JobListing = ({ imgURL, name, desc }) => {
  return (
    <>
      <HStack
      padding="1rem"
        w="100%"
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
          <Text fontSize="sm">{desc}</Text>
        </Box>
      </HStack>
      <Box borderBottom={"1px solid #D0D0D0"}></Box>
    </>
  );
};

export default JobListing;

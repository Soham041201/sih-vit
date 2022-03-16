import React from "react";
import { Circle, HStack, Text, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const UserProduct = ({ productName, productDesc }) => {
  return (
    <HStack>
      <Circle width="3.3rem">
        <img src="https://bit.ly/3w2CQzO" alt="bharatPe" />
      </Circle>
      <Box padding={"0.5rem"}>
        <Text fontSize="lg" fontWeight={500}>
          {productName}
        </Text>
        <Text fontSize="sm">{productDesc}</Text>
      </Box>
      <ArrowForwardIcon />
    </HStack>
  );
};

export default UserProduct;

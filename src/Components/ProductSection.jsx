import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Circle, HStack, Icon, Text } from "@chakra-ui/react";
import { productHunt } from "../icons/icons";

function ProductSection() {
  return (
    <>
      <Box padding={"1rem"}>
        <HStack padding={"1rem"}>
          <Icon boxSize={"2rem"} as={productHunt}></Icon>
          <Text fontSize="2xl">Products</Text>
        </HStack>

        <HStack>
          <Circle width="3.3rem">
            <img src="https://bit.ly/3w2CQzO" alt="bharatPe" />
          </Circle>
          <Box padding={"0.5rem"}>
            <Text fontSize="lg" fontWeight={500}>
              BharatPe
            </Text>
            <Text fontSize="sm">
              Mujhse bada dukan ka network kisi ke pass nhi. One India, One QR.
            </Text>
          </Box>
          <ArrowForwardIcon />
        </HStack>
      </Box>
    </>
  );
}

export default ProductSection;

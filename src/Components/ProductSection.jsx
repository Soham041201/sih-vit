import { Box, HStack, VStack, Icon, Text } from "@chakra-ui/react";
import { productHunt } from "../icons/icons";
import UserProduct from "../Components/UserProduct";

const ProductSection = () => {
  return (
    <>
      <Box padding={"1rem"}>
        <HStack padding={"1rem"}>
          <Icon boxSize={"2rem"} as={productHunt}></Icon>
          <Text fontSize="2xl">Products</Text>
        </HStack>
        <VStack align="start" gap="0.5rem" padding="1rem">
          <UserProduct
            productName="BharatPe"
            productDesc="Mujhse bada dukan ka network kisi ke pass nhi. One India, One QR."
          />
        </VStack>
      </Box>
    </>
  );
};

export default ProductSection;

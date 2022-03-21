import { Box, HStack, VStack, Icon, Text } from "@chakra-ui/react";
import { briefCase } from "../../icons/icons";
import UserProduct from "../User/UserProduct";

const JobSection = () => {
  const posts = [
    {
      name: "BusinessPosts",
      desc: "BharatPe |  Internship | 12 days ago",
    },
    {
      name: "Product Manager",
      desc: "BharatPe |  Full-Time | 4 days ago",
    },
    {
      name: "Software Consultant",
      desc: "BharatPe |  Full-Time | 6 days ago",
    },
  ];
  return (
    <Box padding={"1rem"}>
      <HStack padding={"1rem"} gap="2">
        <Icon boxSize={"2rem"} as={briefCase}></Icon>
        <Text fontSize="2xl">Jobs</Text>
      </HStack>
      <VStack align="start" gap="0.5rem" padding="1rem 0">
        {posts.map(({ name, desc }, key) => {
          return (
            <UserProduct productName={name} productDesc={desc} key={key} />
          );
        })}
      </VStack>
    </Box>
  );
};

export default JobSection;
import { Flex, Text, Box, Icon, HStack } from "@chakra-ui/react";
import { chat, thumbsUp, stack } from "../icons/icons";
import Vector from "../icons/Vector.svg";

function PostsActivitySection() {
  return (
    <>
      <Flex flexDir={"column"} gap={6} padding="1rem">
        <HStack h={"4rem"} padding="2rem" bg="#fff" gap={"2rem"}>
          <HStack>
            <img src={Vector} alt="Posts" />
            <Text fontSize={"xl"}>Posts</Text>
          </HStack>

          <HStack>
            <Icon as={stack} boxSize={"1.7rem"}></Icon>
            <Text fontSize={"xl"}>Activity</Text>
          </HStack>
        </HStack>
        {/* first post starts here */}
        <Flex>
          <Flex
            fontSize="1.3rem"
            flexDir="column"
            gap={5}
            alignSelf="center"
            padding={".5rem 1rem"}
          >
            <Icon boxSize={"25px"} as={thumbsUp}></Icon>
            <Icon boxSize={"25px"} as={chat}></Icon>
          </Flex>
          <Box padding={".8rem"} bg="#fff" borderRadius={"6px"}>
            <Text fontSize="xl" lineHeight={1.5}>
              Bhai ye tu kya kar raha hai
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis
              in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis
              rutrum sodales...
            </Text>
          </Box>
        </Flex>
        {/* end of first post */}

        {/*  */}

        <Flex>
          <Flex
            fontSize="1.3rem"
            flexDir="column"
            gap={5}
            alignSelf="center"
            padding={".5rem 1rem"}
          >
            <Icon boxSize={"25px"} as={thumbsUp}></Icon>
            <Icon boxSize={"25px"} as={chat}></Icon>
          </Flex>
          <Box padding={".8rem"} bg="#fff" borderRadius={"6px"}>
            <Text fontSize="xl" lineHeight={1.5}>
              Mein kisi ko khush karne nhi baitha hoon
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis
              in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis
              rutrum sodales...
            </Text>
          </Box>
        </Flex>

        {/*  */}
        <Flex>
          <Flex
            fontSize="1.3rem"
            flexDir="column"
            gap={5}
            alignSelf="center"
            padding={".5rem 1rem"}
          >
            <Icon boxSize={"25px"} as={thumbsUp}></Icon>
            <Icon boxSize={"25px"} as={chat}></Icon>
          </Flex>
          <Box padding={".8rem"} bg="#fff" borderRadius={"6px"}>
            <Text fontSize="xl" lineHeight={1.5}>
              Tumne 3 deegree waste ki... mera khoon kholra hai
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis
              in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis
              rutrum sodales...
            </Text>
          </Box>
        </Flex>
        {/* last post ends here */}
      </Flex>
    </>
  );
}

export default PostsActivitySection;

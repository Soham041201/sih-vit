import {
  Text,
  VStack,
  Icon,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { stack } from "../../icons/icons";
import Vector from "../../icons/Vector.svg";
import UserPosts from "../User/UserPosts"

const posts = [
  {
    name: "Bhai ye tu kya kar raha hai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis rutrum sodales...",
  },
  {
    name: "Mein kisi ko khush karne nhi baitha hoon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis rutrum sodales...",
  },
  {
    name: "Tumne 3 deegree waste ki... mera khoon kholra hai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis rutrum sodales...",
  },
];

const PostsActivitySection = () => {
  return (
    <VStack gap={6} padding="1rem">
      <HStack
        width={"100%"}
        h={"4rem"}
        padding="2rem"
        bg={useColorModeValue("#fff", "gray.800")}
        gap={"2rem"}
      >
        <HStack>
          <img src={Vector} alt="Posts" />
          <Text fontSize={"xl"}>Posts</Text>
        </HStack>

        <HStack>
          <Icon as={stack} boxSize={"1.7rem"}></Icon>
          <Text fontSize={"xl"}>Activity</Text>
        </HStack>
      </HStack>
      {posts.map(({ name, desc }, key) => {
        return <UserPosts postName={name} postDesc={desc} key={key} />;
      })}
    </VStack>
  );
};

export default PostsActivitySection;

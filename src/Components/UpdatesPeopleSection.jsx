import {
  Text,
  Box,
  VStack,
  Icon,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { target, account } from "../icons/icons";
import BusinessPosts from "./BusinessPosts";
import PeopleSection from "./PeopleSection";

const updates = [
  {
    name: "Dukaan ka sabse bada network banaya aaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis rutrum sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum.",
  },
  {
    name: "Dukaan ka sabse bada network banaya aaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum. Ut at turpis in lectus posuere dapibus eget at erat. Etiam tincidunt metus quis rutrum sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lobortis lorem, eget scelerisque ipsum.",
  },
];

const people = [
  { name: "Ashneer Grover", position: "Founder and MD" },
  { name: "Anupam Mittal", position: "Lead Investor" },
];

const PostsActivitySection = () => {
  const [peopleActive, setPeopleActive] = useState(true);
  const [colorUpdates, setColorUpdates] = useState("pink.500");
  const [colorPeople, setColorPeople] = useState("");
  // const [active, setActive] = useState({
  //   isActive: true,
  //   updatesColor: "pink.500",
  //   peopleColor: "",
  // });
  // console.log(setActive({isActive:true,...active }));
  return (
    <VStack gap={4} padding="1rem">
      <HStack
        width={"100%"}
        gap={"2rem"}
        h={"4rem"}
        paddingLeft="2rem"
        bg={useColorModeValue("#fff", "gray.800")}
        borderRadius="10px"
      >
        <HStack
          cursor={"pointer"}
          color={colorUpdates}
          onClick={() => {
            setPeopleActive(true);
            setColorPeople("");
            setColorUpdates("pink.500");
          }}
        >
          <Icon as={target} boxSize={"1.7rem"}></Icon>
          <Text fontSize={"xl"}>Updates</Text>
        </HStack>

        <HStack
          cursor={"pointer"}
          color={colorPeople}
          onClick={() => {
            setPeopleActive(false);
            setColorUpdates("");
            setColorPeople("pink.500");
          }}
        >
          <Icon as={account} boxSize={"1.7rem"}></Icon>
          <Text fontSize={"xl"}>People</Text>
        </HStack>
      </HStack>
      {peopleActive ? (
        <>
          {updates.map(({ name, desc }, key) => {
            return <BusinessPosts postName={name} postDesc={desc} key={key} />;
          })}
        </>
      ) : (
        <Box align={"start"} w="100%" minHeight="30vh">
          {people.map(({ name, position }, key) => {
            return <PeopleSection name={name} position={position} key={key} />;
          })}
        </Box>
      )}
    </VStack>
  );
};

export default PostsActivitySection;

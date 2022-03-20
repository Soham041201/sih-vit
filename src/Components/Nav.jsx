import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.400", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("whiteAlpha.900", "gray.900")} px={4}>
        <Flex
          h={16}
          basis={"80%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
          logo
          </Box>

          <Box>
          <Text fontSize="2xl" fontWeight={550} font-family='Nunito'>
          Startup India
          </Text>
          </Box>
        
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
            
              <Button onClick={toggleColorMode} isRound="true">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              
              <Menu>
                
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;

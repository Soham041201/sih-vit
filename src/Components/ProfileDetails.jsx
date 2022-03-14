import { Text, VStack, Button, HStack, Icon } from "@chakra-ui/react";
import { globe, moneyDollar, mail, linkedIn, twitter } from "../icons/icons";

function ProfileDetails() {
  return (
    <>
      <HStack padding="1rem" spacing="2rem">
        <img
          src="https://sm.mashable.com/t/mashable_in/photo/default/shark-tank-indias-ashneer-grover-might-get-fired-from-bharat_femk.h960.png"
          alt="ashneer"
          style={{
            height: "150px",
            width: "150px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <VStack width={"80vw"}>
          <HStack width="100%" spacing={6}>
            <Text fontSize="3xl" fontWeight={650}>
              Ashneer Grover
            </Text>

            <Button colorScheme="pink" variant="solid">
              Follow
            </Button>
            <Button colorScheme="pink" variant="outline">
              Pitch
            </Button>
          </HStack>
          <Text width="100%" textAlign="start" fontSize="sm">
            @ashneer
          </Text>
          <Text width="100%" textAlign="start" fontSize="md" fontWeight={600}>
            Ye sab doglapan hai | Shark @ Shark Tank India
          </Text>
          {/*  */}
          <HStack
            width="100%"
            padding="1rem 0"
            //  paddingLeft={"12.35rem"}
            fontSize="24px"
          >
            <HStack flexGrow="1">
              <Icon as={moneyDollar}></Icon>
              <Text fontSize="md">101K Followers</Text>
              <Text fontSize="md">0 Following</Text>
            </HStack>
            <HStack gap="1rem">
              <Icon
                as={globe}
                // color="red"
              ></Icon>
              <Icon as={mail}></Icon>
              <Icon as={linkedIn}></Icon>
              {/* standard way of creating svg icon */}
              <Icon as={twitter}></Icon>
            </HStack>
          </HStack>
          {/*  */}
        </VStack>
      </HStack>
    </>
  );
}

export default ProfileDetails;

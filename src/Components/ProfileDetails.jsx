import { Text, VStack, Button, HStack, Icon,Spacer } from "@chakra-ui/react";
import { globe, moneyDollar, mail, linkedIn, twitter } from "../icons/icons";

const ProfileDetails = () => {
  return (
  
    <HStack padding="1rem" spacing="4rem" height="287px" width="100%">

      <img
        src="https://sm.mashable.com/t/mashable_in/photo/default/shark-tank-indias-ashneer-grover-might-get-fired-from-bharat_femk.h960.png"
        alt="ashneer"
        style={{
          height: "150px",
          width: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          p:"10px",
        }}
      /> 
      
      <VStack width={"80vw"} padding="10px">  
      
        <HStack width="100%" spacing={6}>
          <Text fontSize="3xl" fontWeight={550} font-family='Nunito'>
            Ashneer Grover
          </Text>

          <Button bg ="#fb2956" color="white" >
            Follow
          </Button>
          <Button color="#fb2956" variant="outline">
            Pitch
          </Button>
        </HStack>
        <Text width="100%" textAlign="start" fontSize="md">
          @ashneer
        </Text>
        <Text width="100%" textAlign="start" fontSize="md" fontWeight={600}>
          Ye sab doglapan hai | Shark @ Shark Tank India
        </Text>
       <HStack width="100%" padding="1rem" fontSize="30px">
        
          <HStack   flexGrow="1" spacing={10}>
            <Icon as={moneyDollar}></Icon>
            <Text fontSize="md">101K Followers</Text>
            <Text  fontSize="md">10 Following</Text>
          </HStack>
          <HStack gap="1rem">
            <Icon as={globe} ></Icon>
            <Icon as={mail}></Icon>
            <Icon as={linkedIn}></Icon>
            <Icon as={twitter}></Icon>
          </HStack>
        </HStack>
      </VStack>
    </HStack>


  );
};

export default ProfileDetails;

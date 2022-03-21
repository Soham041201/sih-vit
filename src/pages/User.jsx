import { useParams } from "react-router-dom";
import { Grid, GridItem, Box, useColorModeValue } from "@chakra-ui/react";
import ProfileDetails from "../Components/User/ProfileDetails";
import PostsActivitySection from "../Components/User/PostsActivitySection";
import ProductSection from "../Components/User/ProductSection";

// check if current screen is desktop or mobile
// import { useMediaQuery } from "@chakra-ui/media-query";
// const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

const User = () => {
  //get user using userid
  const { userid } = useParams();
  console.log("userid:", userid);

  return (
    <Box padding={"1rem"}>
      {/* <p >Screen {isSmallScreen ? "Chhoti" : "Badi"} h!</p> */}
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={5}
          borderRadius="10px"
          bg={useColorModeValue("#fff", "gray.800")}
        >
          <ProfileDetails />
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 3 }} width="100%">
          <PostsActivitySection />
        </GridItem>
        <GridItem
          colSpan={{ base: 5, md: 2 }}
          borderRadius="10px"
          bg={useColorModeValue("#fff", "gray.800")}
        >
          <ProductSection />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default User;

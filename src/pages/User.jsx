import { useParams } from "react-router-dom";

//
import { Grid, GridItem } from "@chakra-ui/react";

// components
import ProfileDetails from "../Components/ProfileDetails";

//styles
import PostsActivitySection from "../Components/PostsActivitySection";
import ProductSection from "../Components/ProductSection";

function User() {
  //get user using userid
  const { userid } = useParams();

  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={4} bg="tomato">
          <ProfileDetails />
          <img src="https://bit.ly/3hZNejk" alt="" />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <PostsActivitySection />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <ProductSection />
        </GridItem>
      </Grid>
    </>
  );
}

export default User;

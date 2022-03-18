import { Grid, GridItem, Box, useColorModeValue } from "@chakra-ui/react";
import BusinessProfile from "../Components/BusinessProfile";
import UpdatesPeopleSection from "../Components/UpdatesPeopleSection";
import JobSection from "../Components/JobSection";

const Business = () => {
  return (
    <Box padding={"1rem"}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem
          colSpan={5}
          borderRadius="10px"
          bg={useColorModeValue("#fff", "gray.800")}
        >
          <BusinessProfile />
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 3 }} width="100%">
          <UpdatesPeopleSection />
        </GridItem>
        <GridItem
          colSpan={{ base: 5, md: 2 }}
          borderRadius="10px"
          margin="1rem 0 1rem 1rem"
          bg={useColorModeValue("#fff", "gray.800")}
        >
          <JobSection />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Business;

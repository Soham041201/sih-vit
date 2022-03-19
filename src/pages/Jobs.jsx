import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import JobListings from "../Components/JobListings";

const jobs = [
  {
    imgURL: "https://bit.ly/3N6TF2K",
    name: "Frontend Engineering Intern | Boat Lifestyle",
    desc: "Full Time | Remote | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/34TZ8IJ",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Full Time | On-Site | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/3tkb67Z",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Internship | Remote | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/3Jt2MIE",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Internship | Remote | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/3u9ozyL",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Internship | Remote | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/34TZ8IJ",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Internship | Remote | Posted: 12 days ago",
  },
  {
    imgURL: "https://bit.ly/34TZ8IJ",
    name: "Artificial Intelligence Analyser | Airbnb",
    desc: "Internship | Remote | Posted: 12 days ago",
  },
];

const Jobs = () => {
  return (
    <Box
      align={"start"}
      padding="1rem"
      margin="2rem"
      borderRadius="10px"
      bg={useColorModeValue("#fff", "gray.800")}
    >
      {jobs.map(({ imgURL, name, desc }, key) => {
        return (
          <JobListings imgURL={imgURL} name={name} desc={desc} key={key} />
        );
      })}
    </Box>
  );
};

export default Jobs;

import {
  Input,
  Box,
  HStack,
  Select,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ProblemLink from "../Components/Problems/ProblemLink";

const problems = [
  {
    statement:
      "Create a sharing model for EV vehicles to increase the their adoptablity.",
    desc: "Nvdia Sustainable Program | Posted: 3 Days ago",
  },
  {
    statement:
      "Create a platform which use AR/VR to show history of a monument  when we scan a QR near the specific  monument.",
    desc: "Travel and Tourism Dept of India | Posted: 1 Days ago",
  },
  {
    statement:
      "Create a sharing model for EV vehicles to increase the their adoptablity.",
    desc: "Nvdia Sustainable Program | Posted: 3 Days ago",
  },
  {
    statement:
      "Create a sharing model for EV vehicles to increase the their adoptablity.",
    desc: "Nvdia Sustainable Program | Posted: 3 Days ago",
  },
  {
    statement:
      "Create a platform which use AR/VR to show history of a monument  when we scan a QR near the specific  monument.",
    desc: "Travel and Tourism Dept of India | Posted: 1 Days ago",
  },
  {
    statement:
      "Create a sharing model for EV vehicles to increase the their adoptablity.",
    desc: "Nvdia Sustainable Program | Posted: 3 Days ago",
  },
];

const Problems = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event) => setInputValue(event.target.value);
  const handleSelected = (event) => setSelectedValue(event.target.value);

  console.log(selectedValue, inputValue);
  return (
    <VStack align="start" padding={"1rem 4rem"} gap="1rem">
      <HStack>
        <Input
          inputvalue={inputValue}
          onChange={handleChange}
          minW="20rem"
          placeholder="Search for a problem statement"
          size="md"
          bg={useColorModeValue("#fff", "gray.800")}
        />
        <Select
          placeholder="Type"
          bg={useColorModeValue("#fff", "gray.800")}
          onChange={handleSelected}
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
        </Select>
      </HStack>

      <Box
        padding={"1rem 2rem"}
        borderRadius={"10px"}
        bg={useColorModeValue("#fff", "gray.800")}
      >
        {problems.map(({ statement, desc }, key) => {
          return (
            <ProblemLink problemStat={statement} problemDesc={desc} key={key} />
          );
        })}
      </Box>
    </VStack>
  );
};

export default Problems;

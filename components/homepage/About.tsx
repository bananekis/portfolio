import { Box, Text } from "@chakra-ui/layout";
import { Code, Divider } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box pb={5}>
      <Divider />
      <Code variant="reversable">
        <Box textStyle="h4">About Me</Box>
      </Code>
      <Text fontSize="md" py={3}>
        Lukáš is a front-end developer with a passion to continuously learn
        {" &"} build modern web applications. After he graduated high school in
        Brno Czech Republic in 2020, he chose to progressively learn front-end
        over back-end, by developing apps. Design and functionality of the code
        are the aspects that he loves and brang him to learn and work with{" "}
        <Text as="span" textShadow="1px 1px" variant="about">
          most popular {"& "}
          modern FE frameworks.
        </Text>
      </Text>
    </Box>
  );
};

export default About;

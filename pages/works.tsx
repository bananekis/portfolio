import { Box } from "@chakra-ui/layout";
import { Code, Divider } from "@chakra-ui/react";
import EshopProjects from "../components/projects/EshopProjects";
import Page from "../components/layouts/Page";
import React from "react";
import StyledButton from "../components/StyledButton";
import WorksProjects from "../components/projects/WorksProjects";

const Works = () => {
  return (
    <Page title="Works">
      <Box pb={5}>
        <Divider />
        <Code variant="reversable">
          <Box textStyle="h4">Works</Box>
        </Code>
      </Box>
      <WorksProjects />
      <Box pb={5}>
        <Divider />
        <Code variant="reversable">
          <Box textStyle="h4">E-commerce Projects</Box>
        </Code>
      </Box>
      <EshopProjects />
      <StyledButton text="Profile" href="/profile" />
    </Page>
  );
};

export default Works;

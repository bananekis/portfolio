import { Box, Flex, Text } from "@chakra-ui/layout";
import Page from "../components/layouts/Page";
import ProfileEducation from "../components/profile/ProfileEducation";
import ProfileExperience from "../components/profile/ProfileExperience";
import ProfileHeading from "../components/profile/ProfileHeading";
import ProfileLanguage from "../components/profile/ProfileLanguage";
import ProfileLogo from "../components/profile/ProfileLogo";
import ProfileSkills from "../components/profile/ProfileSkills";
import React from "react";
import StyledButton from "../components/StyledButton";

const profile = () => {
  return (
    <Page title="Profile">
      <Flex flexDirection="column" position="relative">
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box>
            <Flex justifyContent="space-between">
              <Box textStyle="h2" borderRadius={10} mb={2}>
                Lukáš Novák
              </Box>
            </Flex>
            <Text>Holíč</Text>
            <Text>+421 902 732 704</Text>
            <Text>contact@nlukas.com</Text>
          </Box>
          <ProfileLogo />
        </Flex>
        <ProfileHeading text="Professional Skills" />
        <ProfileSkills />
        <ProfileHeading text="Experience" />
        <ProfileExperience />
        <ProfileHeading text="Education" />
        <ProfileEducation />
        <ProfileHeading text="Language Skills" />
        <ProfileLanguage />
        <StyledButton text="Contact Me" href="/" />
      </Flex>
    </Page>
  );
};

export default profile;

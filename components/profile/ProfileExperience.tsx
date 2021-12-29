import { Box, Flex, Text } from "@chakra-ui/layout";
import { Code } from "@chakra-ui/react";
import { ProfileBox } from "./ProfileEducation";
import { experience } from "../../lib/experience";
import CVText from "../layouts/CVText";
import React from "react";

interface Props {
  textCV: string;
}

const ProfileExperience = ({ textCV }: Props) => {
  return (
    <ProfileBox>
      {experience.map((exp) => (
        <Box margin="0 auto" width="90%" key={exp.title}>
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "baseline", md: "center" }}
            mt={2}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Code variant="titleCV" fontSize={["md", "xl"]} color="white">
              {exp.title}
            </Code>
            <Text fontStyle="italic">{exp.date}</Text>
          </Flex>
          <Box my={3} bg={textCV} p={2} borderRadius={5}>
            <Text
              as="i"
              display="block"
              mb={3}
              variant="company"
              textShadow="1px 1px"
            >
              {exp.company}
            </Text>
            <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
              <CVText>{exp.exp_1}</CVText>
            </Text>
            <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
              <CVText>{exp.exp_2}</CVText>
            </Text>
            {!exp.exp_3 ? (
              ""
            ) : (
              <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
                <CVText>{exp.exp_3}</CVText>
              </Text>
            )}
          </Box>
        </Box>
      ))}
    </ProfileBox>
  );
};

export default ProfileExperience;

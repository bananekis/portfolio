import { Box, Flex, Text } from "@chakra-ui/layout";
import { Code } from "@chakra-ui/react";
import { experience } from "../../lib/experience";
import React from "react";

const ProfileExperience = () => {
  return (
    <>
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
          <Box my={3}>
            <Text
              as="i"
              display="block"
              mb={3}
              variant="company"
              textShadow="1px 1px"
            >
              {exp.company}
            </Text>
            <Text fontSize="md" display="flex" alignItems="center" pb={2}>
              {exp.exp_1}
            </Text>
            <Text fontSize="md" display="flex" alignItems="center" pb={2}>
              {exp.exp_2}
            </Text>
            {!exp.exp_3 ? (
              ""
            ) : (
              <Text fontSize="md" display="flex" alignItems="center" pb={2}>
                {exp.exp_3}
              </Text>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProfileExperience;

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Code } from "@chakra-ui/react";
import { education } from "../../lib/education";
import React from "react";

const ProfileEducation = () => {
  return (
    <>
      {education.map((edu) => (
        <Box margin="0 auto" width="90%" key={edu.platform}>
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "baseline", md: "center" }}
            mt={2}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Code variant="titleCV" fontSize={["md", "xl"]} color="white">
              {edu.title}
            </Code>
            <Text fontStyle="italic">{edu.date}</Text>
          </Flex>
          <Box my={3}>
            <Text
              as="i"
              display="block"
              mb={3}
              variant="company"
              textShadow="1px 1px"
            >
              {edu.platform}
            </Text>
            <Text fontSize="md" display="flex" alignItems="center" pb={2}>
              {edu.exp_1}
            </Text>
            <Text fontSize="md" display="flex" alignItems="center" pb={2}>
              {edu.exp_2}
            </Text>
            {!edu.exp_3 ? (
              ""
            ) : (
              <>
                <Text fontSize="md" display="flex" alignItems="center" pb={2}>
                  {edu.exp_3}
                </Text>
                <Text fontSize="md" display="flex" alignItems="center" pb={2}>
                  {edu.exp_4}
                </Text>
                <Text fontSize="md" display="flex" alignItems="center" pb={2}>
                  {edu.exp_5}
                </Text>
              </>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProfileEducation;

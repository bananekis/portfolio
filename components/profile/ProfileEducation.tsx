import { Box, Flex, Text } from "@chakra-ui/layout";
import { Code } from "@chakra-ui/react";
import { education } from "../../lib/education";
import CVText from "../layouts/CVText";
import React from "react";
import styled from "@emotion/styled";

export const ProfileBox = styled(Box)`
  & > div:not(:last-child) {
    margin-bottom: 2.5em;
  }
`;

interface Props {
  textCV: string;
}

const ProfileEducation = ({ textCV }: Props) => {
  return (
    <ProfileBox>
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
          <Box my={3} p={2} bg={textCV} borderRadius={5}>
            {edu.platform !== "" && (
              <Text
                as="i"
                display="block"
                mb={3}
                variant="company"
                textShadow="1px 1px"
              >
                {edu.platform}
              </Text>
            )}
            <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
              <CVText>{edu.exp_1}</CVText>
            </Text>
            <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
              <CVText>{edu.exp_2}</CVText>
            </Text>
            {!edu.exp_3 ? (
              ""
            ) : (
              <>
                <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
                  <CVText>{edu.exp_3}</CVText>
                </Text>
                <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
                  <CVText>{edu.exp_4}</CVText>
                </Text>
                <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
                  {edu.exp_5 !== "" && <CVText>{edu.exp_5}</CVText>}
                </Text>
              </>
            )}
          </Box>
        </Box>
      ))}
    </ProfileBox>
  );
};

export default ProfileEducation;

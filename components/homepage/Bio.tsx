import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Code, Divider, Link, useColorModeValue } from "@chakra-ui/react";
import { Slide } from "@chakra-ui/transition";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";

const Bio = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bgSlideColor = useColorModeValue("blue.500", "purple.500");

  return (
    <Box pb={5}>
      <Divider />
      <Code variant="reversable">
        <Box textStyle="h4">Bio</Box>
      </Code>
      <Box py={3}>
        <Flex
          alignItems={{ base: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text variant="bio" textShadow="1px 1px">
            2001
          </Text>
          <p style={{ display: "block" }}>&rarr; Born in Skalica, Slovakia</p>
        </Flex>
        <Flex
          alignItems={{ base: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text variant="bio" textShadow="1px 1px">
            2020
          </Text>
          <p style={{ display: "block" }}>
            &rarr; Graduated high school of informatics technology in Brno,
            Czech Republic
          </p>
        </Flex>
        <Flex
          alignItems={{ base: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text variant="bio" textShadow="1px 1px">
            2021
          </Text>
          <Box>
            &rarr; Sucessful graduate from
            <Text
              as="span"
              onClick={onToggle}
              variant="bio"
              cursor="pointer"
              mx={1}
            >
              SmartBrains IT-absolvent*
            </Text>
            trainee where I have gained team {"&"} company development
            experience
          </Box>
        </Flex>

        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg={bgSlideColor}
            rounded="md"
            shadow="md"
          >
            <AiOutlineCloseCircle
              onClick={onToggle}
              style={{
                marginBottom: ".5em",
                fontSize: "2em",
                cursor: "pointer",
              }}
            />
            This was unique form of online trainee where we had our own
            supervisor who trained us React and whole workflow around it. We
            were continuously pushing our updates to gitlab and we were receving
            feedback from it. Only 5 people out of 25 succeeded and I was one of
            them. This trainee helped me to understand React and understand the
            part of working in a team.
            <Box pt={5}>
              Find more about the trainee at{" "}
              <Link variant="link-color" href="https://www.it-absolvent.cz/">
                IT-ABSOLVENT
              </Link>
              {" & "}
              <Link variant="link-color" href="https://www.smartbrains.cz/">
                SMART BRAINS
              </Link>
            </Box>
          </Box>
        </Slide>

        <Flex
          alignItems={{ base: "flex-start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text variant="bio" textShadow="1px 1px">
            present
          </Text>
          <p style={{ display: "flex" }}>
            &rarr; Currently working as a React FE developer, hit me up with any
            interesting projects!
          </p>
        </Flex>
      </Box>
    </Box>
  );
};

export default Bio;

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";
import { works } from "../../lib/works";
import Image from "next/image";
import React from "react";

const WorksProjects = () => {
  return (
    <SimpleGrid
      minChildWidth={"304px"}
      columns={3}
      spacing={10}
      justifyItems="center"
      pb={10}
      display={{ base: "flex", md: "grid" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {works.map((work) => {
        let delay = work.delay;

        return (
          <motion.div
            key={work.source_url}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
            style={{ display: "flex" }}
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              position="relative"
            >
              <a
                href={work.site}
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={require(`../../assets/works/${work.image}`)}
                  alt={work.alt}
                />
              </a>
              <Flex alignItems="center" p={3} flexDirection="column" mb={20}>
                <Text textStyle="h4" pb={2} textAlign="center">
                  {work.name}
                </Text>
                <Text p={2} textAlign="center" fontSize="sm">
                  {work.description}
                </Text>
                <a
                  href={work.source_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  <Flex
                    position="absolute"
                    alignItems="center"
                    bottom={"13px"}
                    left={"26px"}
                  >
                    <GoMarkGithub style={{ marginRight: ".5em" }} /> Source
                  </Flex>
                </a>
              </Flex>
            </Box>
          </motion.div>
        );
      })}
    </SimpleGrid>
  );
};

export default WorksProjects;

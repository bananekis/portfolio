import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";
import AddProject from "./AddProject";
import Image from "next/image";
import React from "react";

const EshopProjects = () => {
  let delay = 0.9;
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <SimpleGrid
        minChildWidth={"304px"}
        columns={3}
        spacing={10}
        justifyItems="center"
        pb={10}
        display={{ base: "flex", md: "grid" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          position="relative"
        >
          <a
            href="https://eshop.fa-jo.sk"
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
          >
            <Image src={require(`../../assets/works/eshop-fa-jo.png`)} />
          </a>
          <Flex alignItems="center" p={3} flexDirection="column" mb={20}>
            <Text textStyle="h4" pb={2} textAlign="center">
              FA-JO E-shop
            </Text>
            <Text pb={2} textAlign="center" fontSize="sm">
              App developed with PHP / Jquery and MySQL database that handles
              security and data availability. E-shop automatically updates
              products stock, prices etc.
            </Text>
            <a
              href="https://github.com/bananekis"
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
        <AddProject />
        <Box />
      </SimpleGrid>
    </motion.div>
  );
};

export default EshopProjects;

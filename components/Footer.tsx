import { Flex, Link, Text } from "@chakra-ui/layout";
import { GoMarkGithub } from "react-icons/go";
import React from "react";

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      pt={10}
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="md" color="gray.600">
        © 2021 Lukáš Novák. All Rights Reserved.
      </Text>
      <Link
        fontSize="sm"
        color="gray.400"
        href="https://github.com/bananekis/portfolio"
        display="flex"
        alignItems="center"
      >
        <GoMarkGithub style={{ marginRight: ".5em" }} /> Source
      </Link>
    </Flex>
  );
};

export default Footer;

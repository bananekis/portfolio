import { AiOutlineMail } from "react-icons/ai";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { BsTelephone } from "react-icons/bs";
import { Divider } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box pb={5}>
      <Divider />
      <Box my={{ base: 5, md: 0 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          h="200px"
          justifyContent="center"
        >
          <Flex justifyContent="center">
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              marginRight={{ base: "0", md: "2em" }}
            >
              <BsTelephone style={{ fontSize: "3em", marginBottom: ".3em" }} />
              <Link fontSize="xl" href="tel:+421 902 832 704">
                +421 902 832 704
              </Link>
            </Flex>
          </Flex>
          <Divider orientation="vertical" />
          <Flex justifyContent="center">
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              marginLeft={{ base: "0", md: "2em" }}
            >
              <AiOutlineMail
                style={{ fontSize: "3em", marginBottom: ".3em" }}
              />
              <Link fontSize="xl" href="mailto:contact@nlukas.com">
                contact@nlukas.com
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;

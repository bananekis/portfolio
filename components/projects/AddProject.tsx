import { AiOutlineCloseCircle } from "react-icons/ai";
import { Box, Flex } from "@chakra-ui/layout";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  Link,
  Slide,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

const AddProject = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bgSlideColor = useColorModeValue("blue.500", "purple.500");

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      position="relative"
    >
      <Box opacity={0}>
        <Image src={require(`../../assets/works/notesapp.png`)} />
      </Box>
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
      >
        <IoAddCircleOutline
          style={{ fontSize: "5em", cursor: "pointer", fontWeight: "200" }}
          onClick={onToggle}
        />
      </Box>

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
          Currently I am working on more awesome projects, this can be yours!
          Hit me up on{" "}
          <NextLink href="tel:+421 902 832 704" passHref>
            <Link variant="link-color">+421 902 832 704</Link>
          </NextLink>{" "}
          or{" "}
          <NextLink href="mailto:contact@nlukas.com" passHref>
            <Link variant="link-color">contact@nlukas.com</Link>
          </NextLink>{" "}
          to discuss your needs.
        </Box>
      </Slide>
    </Box>
  );
};

export default AddProject;

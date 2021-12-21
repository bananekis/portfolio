import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const StyledButton = ({ text, href }: Props) => {
  const buttonColor = useColorModeValue("blue", "purple");

  return (
    <Flex justifyContent="center">
      <NextLink href={href} passHref>
        <Button
          colorScheme={buttonColor}
          variant="outline"
          rightIcon={<MdKeyboardArrowRight />}
        >
          <Flex alignItems="center">
            <Text>{text}</Text>
          </Flex>
        </Button>
      </NextLink>
    </Flex>
  );
};

export default StyledButton;

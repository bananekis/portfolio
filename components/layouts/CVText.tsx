import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: string;
}

const CVText = ({ children }: Props) => {
  return (
    <>
      <Box as="span" mr={2}>
        •
      </Box>
      {children}
    </>
  );
};

export default CVText;

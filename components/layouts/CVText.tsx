import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: string;
}

const CVText = ({ children }: Props) => {
  return (
    <>
      <Box mr={2}>•</Box>
      {children}
    </>
  );
};

export default CVText;

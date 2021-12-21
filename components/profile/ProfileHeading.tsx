import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const ProfileHeading = ({ text }: Props) => {
  const bgProfile = useColorModeValue("blue.600", "purple.600");

  return (
    <Box
      textStyle="h4"
      bg={bgProfile}
      borderRadius={10}
      p={3}
      my={5}
      color="white"
    >
      {text}
    </Box>
  );
};

export default ProfileHeading;

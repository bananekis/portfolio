import { Flex, Text } from "@chakra-ui/layout";
import CVText from "../layouts/CVText";
import React from "react";

interface Props {
  textCV: string;
}

const ProfileLanguage = ({ textCV }: Props) => {
  return (
    <>
      <Flex
        flexDirection="column"
        margin="0 auto"
        width="90%"
        mb={10}
        p={2}
        bg={textCV}
        borderRadius={5}
      >
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          <CVText>Slovak – native proficiency</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          <CVText>English – B2 proficiency</CVText>
        </Text>
      </Flex>
    </>
  );
};

export default ProfileLanguage;

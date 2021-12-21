import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const ProfileLanguage = (props: Props) => {
  return (
    <>
      <Flex flexDirection="column" margin="0 auto" width="90%" pb={5}>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • Slovak – native proficiency
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • English – B2 proficiency
        </Text>
      </Flex>
    </>
  );
};

export default ProfileLanguage;

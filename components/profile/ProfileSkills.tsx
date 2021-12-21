import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

const ProfileSkills = () => {
  return (
    <>
      <Flex flexDirection="column" margin="0 auto" width="90%">
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • Typescript, JavaScript (ES5/ES6/ES7+), fetch / axios, Rest API,
          GraphQL
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • React.js, Next.js, Redux, Context API
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • create-react-app, create-next-app
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • PHP / AJAX
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • HTML, CSS, styled-compoennts, SASS
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • MySQL (phpMyAdmin, HeidiSQL)
        </Text>
        <Text fontSize="md" display="flex" alignItems="center" pb={2}>
          • git, gitlab, Code reviews
        </Text>
      </Flex>
    </>
  );
};

export default ProfileSkills;

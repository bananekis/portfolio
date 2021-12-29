import { Flex, Text } from "@chakra-ui/layout";
import CVText from "../layouts/CVText";
import React from "react";

interface Props {
  textCV: string;
}

const ProfileSkills = ({ textCV }: Props) => {
  return (
    <>
      <Flex
        flexDirection="column"
        margin="0 auto"
        width="90%"
        bg={textCV}
        p={2}
        borderRadius={5}
      >
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>
            Typescript, JavaScript (ES5/ES6/ES7+), fetch / axios, Rest API,
            GraphQL
          </CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>React.js, Next.js, Redux, Context API</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>create-react-app, create-next-app</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>PHP / AJAX</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>HTML, CSS, styled-compoennts, SASS</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>MySQL (phpMyAdmin, HeidiSQL)</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>git, gitlab, Code reviews</CVText>
        </Text>
      </Flex>
    </>
  );
};

export default ProfileSkills;

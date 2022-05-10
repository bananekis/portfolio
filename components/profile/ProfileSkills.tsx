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
          <CVText>
            React.js, Next.js, Redux, Context API, React Sagas, Overmind.js
          </CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>create-react-app, create-next-app</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>Antd design, Material UI, Chakra UI and more</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>
            styled components, tailwind css, less, sass, BEM technology
          </CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>PHP / AJAX</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>MySQL (phpMyAdmin, HeidiSQL)</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>Git, Gitlab, code reviews</CVText>
        </Text>
        <Text fontSize="md" display="flex" alignItems="baseline" pb={2}>
          <CVText>Jest, React testing library</CVText>
        </Text>
      </Flex>
    </>
  );
};

export default ProfileSkills;

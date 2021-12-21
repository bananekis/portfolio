import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import StyledButton from "../components/StyledButton";

const NotFound = () => {
  return (
    <Container maxWidth="container.lg">
      <Box pb={5}>
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
      </Box>
      <NextLink href="/">
        <StyledButton text="Return to Home" href="/" />
      </NextLink>
    </Container>
  );
};

export default NotFound;

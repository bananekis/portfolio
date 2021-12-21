import { Breadcrumb, BreadcrumbItem, IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Container, Flex } from "@chakra-ui/layout";
import { LinkIsActive } from "./Navigation";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import NavResponzive from "./NavResponzive";
import React from "react";

interface Props {
  path: string;
}

const NavPopUp = ({ path }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgNavColor = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        position={"fixed"}
        top={0}
        zIndex={100}
        display={{ base: "none", lg: "flex" }}
      >
        <Container
          maxWidth="container.lg"
          p={1}
          display="flex"
          justifyContent="space-between"
          borderWidth="1px"
          borderRadius="5px"
          width={"100%"}
          margin="0 auto"
          bg={bgNavColor}
        >
          <Breadcrumb separator="/">
            <BreadcrumbItem>
              <LinkIsActive href="/" path={path}>
                Lukáš Novák
              </LinkIsActive>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <LinkIsActive href="/works" path={path}>
                Works
              </LinkIsActive>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <LinkIsActive href="/profile" path={path}>
                Profile
              </LinkIsActive>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button
            onClick={toggleColorMode}
            as={IconButton}
            icon={colorMode === "light" ? <MdNightlightRound /> : <MdWbSunny />}
            padding="0"
          />
        </Container>
      </Flex>
      {path === "/profile" && <NavResponzive path={path} />}
    </>
  );
};

export default NavPopUp;

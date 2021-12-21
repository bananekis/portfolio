import { Breadcrumb, BreadcrumbItem, IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Flex, Link } from "@chakra-ui/layout";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import NavResponzive from "./NavResponzive";
import NextLink from "next/link";
import React from "react";

// custom link

interface Link {
  href: string;
  path: string;
  children: string;
}

export const LinkIsActive = ({ href, path, children }: Link) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("black", "white");
  const navColor = useColorModeValue("blue.400", "purple.300");

  return (
    <NextLink href={href} passHref>
      <Link p={2} color={active ? navColor : inactiveColor} display="block">
        {children}
      </Link>
    </NextLink>
  );
};

// navigation (MAIN)

interface Props {
  path: string;
}

const Navigation = ({ path }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        display={{ base: "none", lg: "flex" }}
        p={1}
        borderWidth="1px"
        borderRadius="5px"
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
      </Flex>
      <NavResponzive path={path} />
    </>
  );
};

export default Navigation;

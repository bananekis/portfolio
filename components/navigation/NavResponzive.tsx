import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@chakra-ui/react";
import { LinkIsActive } from "./Navigation";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";

interface Props {
  path: string;
}

const NavResponzive = ({ path }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={{ base: "inline-block", lg: "none" }}
      position="fixed"
      zIndex={99}
      mr="1em"
      right="0"
      top="12px"
    >
      <Button
        onClick={toggleColorMode}
        as={IconButton}
        padding="0"
        marginRight="1em"
        icon={colorMode === "light" ? <MdNightlightRound /> : <MdWbSunny />}
      />
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<GiHamburgerMenu />}
          aria-label="hamburger"
        />
        <MenuList>
          <MenuItem as={LinkIsActive} href="/" path={path}>
            Lukáš Novák
          </MenuItem>
          <MenuItem as={LinkIsActive} href="/works" path={path}>
            Works
          </MenuItem>
          <MenuItem as={LinkIsActive} href="/profile" path={path}>
            Profile
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavResponzive;

import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Lukas from "../assets/lukas.png";
import Navigation from "./navigation/Navigation";
import React from "react";
//@ts-ignore
import Typist from "react-typist";

interface Props {
  path: string;
}

const Header = ({ path }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      pb={10}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        pr={3}
        width="100%"
      >
        <Flex flex={1} flexDirection="column">
          <Box textStyle="h1">Lukáš Novák</Box>
          <Text
            as="div"
            fontSize={["md", "xl"]}
            variant="title"
            display="flex"
            alignItems="center"
            flex="1"
            my={{ base: 5, lg: 0 }}
          >
            <Box height="50px">
              <Typist style={{ display: "flex" }}>
                Hello! 👋 , I{"'"}m front-end developer based in Brno, Czech
                Republic
              </Typist>
            </Box>
          </Text>
        </Flex>
        <Navigation path={path} />
      </Flex>
      <Flex width={{ base: "100%", md: "50%" }}>
        <Image src={Lukas} alt="Novak" className="next-image" />
      </Flex>
    </Flex>
  );
};

export default Header;

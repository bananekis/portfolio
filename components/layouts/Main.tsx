import { Box, Container } from "@chakra-ui/layout";
import { Router } from "next/router";
import { motion } from "framer-motion";
import Footer from "../Footer";
import Head from "next/head";
import Header from "../Header";
import NavPopUp from "../navigation/NavPopUp";
import Page from "./Page";
import React, { useEffect, useState } from "react";
interface Props {
  children: JSX.Element;
  router: Router;
}

const Main = ({ children, router }: Props) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY >= 224) setIsFixed(true);
      else setIsFixed(false);
    });
  }, []);

  return (
    <Box as="main" pb={10}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Lukáš Novák Homepage" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Lukáš Novák Homepage" />
        <meta name="author" content="Lukáš Novák" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio - Lukáš Novák</title>
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={isFixed ? { opacity: 1, y: 0 } : {}}
        style={{ position: "fixed", zIndex: 100, width: "100%" }}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <NavPopUp path={router.asPath} />
      </motion.div>

      <Container maxWidth="container.lg" pt={14}>
        {router.asPath !== "/profile" && (
          <Page>
            <Header path={router.asPath} />
          </Page>
        )}
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Main;

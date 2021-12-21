import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

interface Page {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const Page = ({ children, title }: Page) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {title && (
      <Head>
        <title>{title} - Lukáš Novák</title>
        <meta property="og:title" content={title} />
      </Head>
    )}
    {children}
  </motion.div>
);

export default Page;

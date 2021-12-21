import About from "../components/homepage/About";
import Bio from "../components/homepage/Bio";
import Contact from "../components/homepage/Contact";
import Page from "../components/layouts/Page";
import StyledButton from "../components/StyledButton";
import Technologies from "../components/homepage/Technologies";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page>
      <About />
      <Bio />
      <Technologies />
      <Contact />
      <StyledButton text="My Portfolio" href="/works" />
    </Page>
  );
};

export default Home;

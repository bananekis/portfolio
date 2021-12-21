import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper";
import { Box } from "@chakra-ui/layout";
import { Code, Divider } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import gitlabLogo from "../../assets/logos/gitlab-logo.png";
import graphQLlogo from "../../assets/logos/graphQL-logo.png";
import nextLogo from "../../assets/logos/nextjs-logo.png";
import reactLogo from "../../assets/logos/reactjs-logo.png";
import reduxLogo from "../../assets/logos/redux-logo.png";
import sassLogo from "../../assets/logos/sass-logo.png";
import styledLogo from "../../assets/logos/styled-logo.png";
import tsLogo from "../../assets/logos/ts-logo.png";

const Technologies = () => {
  return (
    <Box pb={5}>
      <Divider />
      <Code variant="reversable">
        <Box textStyle="h4">Technologies I work with</Box>
      </Code>
      <Box pb={3} pt={5}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 500,
          }}
          speed={3000}
          style={{
            textAlign: "center",
            cursor: "grabbing",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          watchSlidesProgress
        >
          <SwiperSlide>
            <Image
              src={nextLogo}
              alt="nextjs"
              width="160px"
              height="150px"
              className="next-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={reactLogo} alt="reactjs" width="150px" height="150px" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={tsLogo}
              alt="typescript"
              width="140px"
              height="150px"
              className="next-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={graphQLlogo}
              alt="graphql"
              width="140px"
              height="150px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={gitlabLogo} alt="gitlab" width="140px" height="150px" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={reduxLogo} alt="redux" width="140px" height="150px" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={styledLogo}
              alt="styled components"
              width="140px"
              height="150px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sassLogo} alt="sass" width="140px" height="150px" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Technologies;

import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import lukasPF from "../../assets/lukas-pf.png";

const ProfileLogo = () => {
  const bgCircle = useColorModeValue("blue.600", "purple.600");

  return (
    <Box bg={bgCircle} width="fit-content" borderRadius="50%">
      <Image
        src={lukasPF}
        alt="lukas novak"
        width="140px"
        height="125px"
        className="next-image-circle"
      />
    </Box>
  );
};

export default ProfileLogo;

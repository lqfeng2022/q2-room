import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import boy from "../assets/boy.png";

const PhotoBox = ({ height, width, bg, nobg, percent }) => {
  const { colorMode } = useColorMode();
  const light = colorMode === "light";

  return (
    <Center
      className="fixed-top"
      marginTop="55px"
      bg={light ? "gray.200" : "gray.700"}
    >
      <Box w="300px" h="330px" className="d-flex justify-content-center">
        <Center>
          <Box
            w={width}
            h={height}
            bg={bg}
            bgSize="cover"
            className="border border-secondary d-flex justify-content-center align-items-end"
          >
            <Image src={nobg ? nobg : boy} w={percent} />
          </Box>
        </Center>
      </Box>
    </Center>
  );
};

export default PhotoBox;

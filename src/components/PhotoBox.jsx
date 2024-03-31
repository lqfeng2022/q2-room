import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import boy from "../assets/boy.png";

const PhotoBox = ({ size, bg, nobg }) => {
  const { colorMode } = useColorMode();

  return (
    <Center
      className="fixed-top"
      mt="64px"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
    >
      <Box w="300px" h="330px" className="d-flex justify-content-center">
        <Center>
          <Box
            w={size.width}
            h={size.height}
            bg={bg}
            bgSize="cover"
            className="border border-secondary d-flex justify-content-center align-items-end"
          >
            <Image src={nobg ? nobg : boy} w={size.per} />
          </Box>
        </Center>
      </Box>
    </Center>
  );
};

export default PhotoBox;

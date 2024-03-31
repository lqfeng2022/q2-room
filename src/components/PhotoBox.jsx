import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import boy from "../assets/boy.png";

const PhotoBox = ({ size, bg, nobg, boxSize, setBoxSize, boolean }) => {
  const { colorMode } = useColorMode();

  const w2 = `${parseInt(size.width.slice(0, -2)) / 2}px`;
  const h2 = `${parseInt(size.height.slice(0, -2)) / 2}px`;

  const handleBox = () => {
    setBoxSize(
      boolean ? { w: "150px", h: "165px" } : { w: "300px", h: "330px" }
    );
  };

  return (
    <Center
      className="fixed-top"
      mt="64px"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      onClick={handleBox}
    >
      <Box
        w={boxSize.w}
        h={boxSize.h}
        className="d-flex justify-content-center"
      >
        <Center>
          <Box
            w={boolean ? size.width : w2}
            h={boolean ? size.height : h2}
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

import React from "react";
import { Box, Stack, HStack, Image, Center, Text } from "@chakra-ui/react";

const ColorStack = ({ color, w, h, nobg, setBg, photo }) => {
  return (
    <HStack
      spacing="15px"
      paddingX={3}
      paddingY={0}
      style={{ overflowX: "auto", maxWidth: "1400px", width: "100vw" }}
    >
      {color.map((p) => (
        <Stack key={p.id}>
          <Box as="button" onClick={() => setBg(p.bg)}>
            <Box
              w={w}
              h={h}
              bg={p.bg}
              style={{ objectFit: "cover" }}
              className="d-flex justify-content-center align-items-end"
            >
              <Image src={nobg ? nobg : photo} />
            </Box>
          </Box>
          <Center>
            <Text mb={0} fontSize="sm">
              {p.name}
            </Text>
          </Center>
        </Stack>
      ))}
    </HStack>
  );
};

export default ColorStack;

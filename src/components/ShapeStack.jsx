import React from "react";
import { Box, HStack, Stack, Image, Center, Text } from "@chakra-ui/react";

const ShapeStack = ({ shape, setHeight, setWidth, setPer, nobg, photo }) => {
  return (
    <HStack
      spacing="15px"
      paddingX={3}
      paddingY={0}
      style={{ overflowX: "auto", maxWidth: "1400px", width: "100vw" }}
    >
      {shape.map((s) => (
        <Stack key={s.id}>
          <Box
            as="button"
            onClick={() => {
              setWidth(s.width);
              setHeight(s.height);
              setPer(s.per);
            }}
          >
            <Box
              w={s.w}
              h={s.h}
              bg="white"
              style={{ objectFit: "cover" }}
              className="d-flex justify-content-center align-items-end"
            >
              <Image src={nobg ? nobg : photo} w={s.per} />
            </Box>
          </Box>
          <Center>
            <Text mb={0} fontSize="sm">
              {s.title}
            </Text>
          </Center>
        </Stack>
      ))}
    </HStack>
  );
};

export default ShapeStack;

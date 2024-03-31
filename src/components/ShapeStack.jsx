import React from "react";
import { Box, HStack, Stack, Image, Center, Text } from "@chakra-ui/react";

const ShapeStack = ({ shape, setSize, nobg, photo }) => {
  const styles = { overflowX: "auto", maxWidth: "1400px", width: "100vw" };
  const display =
    "d-flex justify-content-center align-items-end object-fit-cover";

  return (
    <HStack spacing="15px" px={3} py={2} style={styles}>
      {shape.map((s) => (
        <Stack key={s.id}>
          <Box
            as="button"
            onClick={() => {
              setSize({ width: s.width, height: s.height, per: s.per });
            }}
          >
            <Box w={s.w} h={s.h} bg="white" className={display}>
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

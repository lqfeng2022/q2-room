import React from "react";
import { Box, Stack, HStack, Image, Center, Text } from "@chakra-ui/react";

const ColorStack = ({ color, nobg, setBg, photo }) => {
  const styles = { overflowX: "auto", width: "100vw" };
  const display =
    "d-flex justify-content-center align-items-end object-fit-cover";

  return (
    <HStack maxW="1400px" spacing="15px" px={3} py={2} style={styles}>
      {color.map((p) => (
        <Stack key={p.id}>
          <Box as="button" onClick={() => setBg(p.bg)}>
            <Box w="100px" h="140px" bg={p.bg} className={display}>
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

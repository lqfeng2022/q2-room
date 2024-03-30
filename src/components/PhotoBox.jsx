import {
  Box,
  Center,
  Image,
  List,
  ListItem,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import boy from "../assets/boy.png";

const PhotoBox = ({ height, width, bg, nobg, percent }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      className="fixed-top"
      marginTop="60px"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
    >
      <Center>
        <List my={3} paddingX={1}>
          <ListItem>
            <Box w="300px" h="300px" className="d-flex justify-content-center">
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
          </ListItem>
        </List>
      </Center>
    </Stack>
  );
};

export default PhotoBox;

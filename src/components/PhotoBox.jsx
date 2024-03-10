import { Box, Center, Image, List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";
import boy from "../assets/boy.png";

const PhotoBox = ({ height, width, bg, nobg, percent }) => {
  return (
    <Stack className="fixed-top" marginTop="60px" bg="gray.200">
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

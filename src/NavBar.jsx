import { Stack, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HiSquare2Stack } from "react-icons/hi2";

const Header = () => {
  return (
    <Stack p={2} bg="gray.100" className="sticky-top">
      <HStack justifyContent="space-between">
        <Link to="/">
          <HStack>
            <Icon as={HiSquare2Stack} boxSize="45px" color="green.400" />
            <Text fontSize="lg" letterSpacing="wide" m={1}>
              ID ROOM
            </Text>
          </HStack>
        </Link>
        <Text marginY={2} fontSize="sm" as="mark">
          LI QIUFENG
        </Text>
      </HStack>
    </Stack>
  );
};

export default Header;

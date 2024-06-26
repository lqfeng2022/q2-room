import {
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiSquare2Stack } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      p={3}
      w="101vw"
      className="sticky-top"
      bg={colorMode === "light" ? "gray.100" : "gray.700"}
    >
      <HStack justifyContent="space-between">
        <Link to="/">
          <HStack>
            <Button px={2} variant="ghost" onClick={toggleColorMode}>
              <Icon as={HiSquare2Stack} boxSize="35px" color="green.400" />
            </Button>
            <Text fontSize="xl" letterSpacing="wide" m={1}>
              Q2 ROOM
            </Text>
          </HStack>
        </Link>
        <Link target="_blank" to="https://github.com/lqfeng2022/q2-room">
          <Button pr={4} colorScheme="gray" variant="ghost">
            <Icon boxSize="22px" as={FaGithub} />
          </Button>
        </Link>
      </HStack>
    </Stack>
  );
};

export default Header;

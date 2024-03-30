import {
  Stack,
  HStack,
  Icon,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HiSquare2Stack } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      p={2}
      bg={colorMode === "light" ? "gray.100" : "gray.600"}
      className="sticky-top"
    >
      <HStack justifyContent="space-between">
        <Link to="/">
          <HStack>
            <Icon as={HiSquare2Stack} boxSize="40px" color="green.400" />
            <Text fontSize="xl" letterSpacing="wide" m={1}>
              Q2 ROOM
            </Text>
          </HStack>
        </Link>
        <HStack>
          <Button
            px={2}
            colorScheme="green"
            variant="ghost"
            onClick={toggleColorMode}
          >
            <Icon boxSize="22px" as={colorMode == "light" ? FiMoon : FiSun} />
          </Button>
          <Link target="_blank" to="https://github.com/lqfeng2022/q2-room">
            <Button px={2} colorScheme="green" variant="ghost">
              <Icon boxSize="22px" as={FaGithub} />
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Header;

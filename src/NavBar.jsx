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
            <Icon as={HiSquare2Stack} boxSize="45px" color="green.400" />
            <Text as="b" fontSize="lg" letterSpacing="wide" m={1}>
              BG REMOVER
            </Text>
          </HStack>
        </Link>
        <Button onClick={toggleColorMode} variant="ghost">
          <Text marginY={2} fontSize="sm" as="mark">
            LI QIUFENG
          </Text>
        </Button>
      </HStack>
    </Stack>
  );
};

export default Header;

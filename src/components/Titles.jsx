import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";

const Titles = ({ icon, title, color }) => {
  return (
    <HStack padding={2}>
      <Icon as={icon} boxSize="30px" color={color} />
      <Text fontSize="sm" my={2}>
        {title}
      </Text>
    </HStack>
  );
};

export default Titles;

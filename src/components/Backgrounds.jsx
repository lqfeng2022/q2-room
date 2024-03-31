import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import backColors from "../data/backColos";
import ColorStack from "./ColorStack";
import Titles from "./Titles";

const Background = ({ nobg, setBg }) => {
  return (
    <Stack px={1} py={2} mb="20px">
      <Titles icon={BsFillImageFill} title="BACK_COLOR" color="green.500" />
      <Stack>
        {backColors.map((c) => (
          <ColorStack
            key={c.name}
            color={c.color}
            setBg={setBg}
            nobg={nobg}
            photo={c.image}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Background;

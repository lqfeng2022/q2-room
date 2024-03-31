import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import backColors from "../data/backColos";
import ColorStack from "./ColorStack";
import Titles from "./Titles";

const Background = ({ nobg, setBg }) => {
  return (
    <Stack paddingY={4} marginBottom="20px">
      <Titles icon={BsFillImageFill} title="BACK_COLOR" color="green.500" />
      <Stack>
        {backColors.map((c) => (
          <ColorStack
            key={c.name}
            color={c.color}
            setBg={setBg}
            photo={c.image}
            nobg={nobg}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Background;

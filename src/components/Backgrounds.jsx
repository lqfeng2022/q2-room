import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import ColorStack from "./ColorStack";
import Titles from "./Titles";
import girl_7 from "../assets/girl_7.png";
import girl_6 from "../assets/girl_6.png";
import girl_5 from "../assets/girl_5.png";
import girl_4 from "../assets/girl_4.png";
import girl_3 from "../assets/girl_3.png";
import girl_2 from "../assets/girl_2.png";
import girl_1 from "../assets/girl_1.png";
import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import man from "../assets/man.png";
import pureColors from "../data/pureColors";

const Background = ({ nobg, setBg }) => {
  const backColors = [
    { name: "blues", color: pureColors[7].blue, image: girl_6 },
    { name: "reds", color: pureColors[2].red, image: girl_7 },
    { name: "grays", color: pureColors[1].gray, image: cat },
    { name: "oranges", color: pureColors[3].orange, image: dog },
    { name: "yellows", color: pureColors[4].yellow, image: man },
    { name: "greens", color: pureColors[5].green, image: girl_5 },
    { name: "teals", color: pureColors[6].teal, image: girl_1 },
    { name: "cyans", color: pureColors[8].cyan, image: girl_2 },
    { name: "purples", color: pureColors[9].purple, image: girl_3 },
    { name: "pinks", color: pureColors[10].pink, image: girl_4 },
  ];
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

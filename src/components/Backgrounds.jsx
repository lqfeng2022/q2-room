import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { IoSquare } from "react-icons/io5";
import cat from "../assets/cat.png";
import dog_3 from "../assets/dog_3.png";
import girl_3 from "../assets/girl_3.png";
import girl_4 from "../assets/girl_4.png";
import girl_5 from "../assets/girl_5.png";
import girl_6 from "../assets/girl_6.png";
import girl_7 from "../assets/girl_7.png";
import girl_8 from "../assets/girl_8.png";
import girl_9 from "../assets/girl_9.png";
import man from "../assets/man.png";
import pureColors from "../data/pureColors";
import ColorStack from "./ColorStack";
import Titles from "./Titles";

const Background = ({ nobg, setBg }) => {
  const grays = pureColors[1].gray;
  const reds = pureColors[2].red;
  const oranges = pureColors[3].orange;
  const yellows = pureColors[4].yellow;
  const greens = pureColors[5].green;
  const teals = pureColors[6].teal;
  const blues = pureColors[7].blue;
  const cyans = pureColors[8].cyan;
  const purples = pureColors[9].purple;
  const pinks = pureColors[10].pink;

  return (
    <Stack paddingY={4} marginBottom="20px">
      <Titles icon={BsFillImageFill} title="BACKGROND" color="purple.500" />
      <Stack>
        <Titles icon={IoSquare} title="BLUE" color="blue.300" />
        <ColorStack
          w="100px"
          h="140px"
          color={blues}
          nobg={nobg}
          setBg={setBg}
          photo={girl_8}
        />
        <Titles icon={IoSquare} title="RED" color="red.300" />
        <ColorStack
          w="100px"
          h="140px"
          color={reds}
          nobg={nobg}
          setBg={setBg}
          photo={girl_9}
        />
        <Titles icon={IoSquare} title="GRAY" color="gray.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={grays}
          nobg={nobg}
          setBg={setBg}
          photo={cat}
        />
        <Titles icon={IoSquare} title="ORANGE" color="orange.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={oranges}
          nobg={nobg}
          setBg={setBg}
          photo={dog_3}
        />
        <Titles icon={IoSquare} title="YELLOW" color="yellow.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={yellows}
          nobg={nobg}
          setBg={setBg}
          photo={man}
        />
        <Titles icon={IoSquare} title="GREEN" color="green.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={greens}
          nobg={nobg}
          setBg={setBg}
          photo={girl_7}
        />
        <Titles icon={IoSquare} title="TEAL" color="teal.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={teals}
          nobg={nobg}
          setBg={setBg}
          photo={girl_3}
        />
        <Titles icon={IoSquare} title="CYAN" color="cyan.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={cyans}
          nobg={nobg}
          setBg={setBg}
          photo={girl_4}
        />
        <Titles icon={IoSquare} title="PURPLE" color="purple.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={purples}
          nobg={nobg}
          setBg={setBg}
          photo={girl_5}
        />
        <Titles icon={IoSquare} title="PINK" color="pink.300" />
        <ColorStack
          w="100px"
          h="100px"
          color={pinks}
          nobg={nobg}
          setBg={setBg}
          photo={girl_6}
        />
      </Stack>
    </Stack>
  );
};

export default Background;

import { Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import boy from "../assets/boy.png";
import toy_3 from "../assets/toy_3.png";
import shapes from "../data/shapes";
import ShapeStack from "./ShapeStack";
import Titles from "./Titles";

const Shapes = ({ nobg, setSize }) => {
  return (
    <Stack paddingY={4}>
      <Titles
        icon={MdOutlinePhotoSizeSelectLarge}
        title="SIZE"
        color="green.500"
      />
      <Stack>
        <ShapeStack
          setSize={setSize}
          shape={shapes[0].content}
          nobg={nobg}
          photo={toy_3}
        />
        <ShapeStack
          setSize={setSize}
          shape={shapes[1].content}
          nobg={nobg}
          photo={boy}
        />
      </Stack>
    </Stack>
  );
};

export default Shapes;

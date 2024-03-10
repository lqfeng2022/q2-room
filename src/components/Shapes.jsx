import { Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { IoSquare } from "react-icons/io5";
import shapes from "../data/shapes";
import ShapeStack from "./ShapeStack";
import Titles from "./Titles";
import girl_7 from "../assets/girl_7.png";
import boy from "../assets/boy.png";

const Shapes = ({ nobg, setWidth, setHeight, setPer }) => {
  return (
    <Stack paddingY={4}>
      <Titles
        icon={MdOutlinePhotoSizeSelectLarge}
        title="SHAPE"
        color="purple.500"
      />
      <Stack>
        <Titles icon={IoSquare} title="RECTANGLE" color="white" />
        <ShapeStack
          setWidth={setWidth}
          setHeight={setHeight}
          setPer={setPer}
          shape={shapes[0].content}
          nobg={nobg}
          photo={boy}
        />
        <Titles icon={IoSquare} title="SQUARE" color="white" />
        <ShapeStack
          setWidth={setWidth}
          setHeight={setHeight}
          setPer={setPer}
          shape={shapes[2].content}
          nobg={nobg}
          photo={girl_7}
        />
      </Stack>
    </Stack>
  );
};

export default Shapes;

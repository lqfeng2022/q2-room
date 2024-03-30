import { Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { IoSquare } from "react-icons/io5";
import shapes from "../data/shapes";
import ShapeStack from "./ShapeStack";
import Titles from "./Titles";
import toy_3 from "../assets/toy_3.png";
import boy from "../assets/boy.png";

const Shapes = ({ nobg, setWidth, setHeight, setPer }) => {
  return (
    <Stack paddingY={4}>
      <Titles
        icon={MdOutlinePhotoSizeSelectLarge}
        title="SHAPE"
        color="green.500"
      />
      <Stack>
        <Titles icon={IoSquare} title="SQUARE" color="white" />
        <ShapeStack
          setWidth={setWidth}
          setHeight={setHeight}
          setPer={setPer}
          shape={shapes[2].content}
          nobg={nobg}
          photo={toy_3}
        />
        <Titles icon={IoSquare} title="RECTANGLE" color="white" />
        <ShapeStack
          setWidth={setWidth}
          setHeight={setHeight}
          setPer={setPer}
          shape={shapes[0].content}
          nobg={nobg}
          photo={boy}
        />
      </Stack>
    </Stack>
  );
};

export default Shapes;

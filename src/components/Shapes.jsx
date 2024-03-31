import { Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import boy from "../assets/boy.png";
import toy_3 from "../assets/toy_3.png";
import shapes from "../data/shapes";
import ShapeStack from "./ShapeStack";
import Titles from "./Titles";

const Shapes = ({ nobg, setSize }) => {
  const square = shapes[0].content;
  const rectangle = shapes[1].content;

  return (
    <Stack px={1} py={2}>
      <Titles
        icon={MdOutlinePhotoSizeSelectLarge}
        title="SIZE"
        color="green.500"
      />
      <Stack>
        <ShapeStack shape={square} setSize={setSize} nobg={nobg} photo={boy} />
        <ShapeStack
          shape={rectangle}
          setSize={setSize}
          nobg={nobg}
          photo={toy_3}
        />
      </Stack>
    </Stack>
  );
};

export default Shapes;

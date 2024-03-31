import React, { useState } from "react";
import { Grid, GridItem, Center, useColorMode } from "@chakra-ui/react";
import PhotoBox from "./components/PhotoBox";
import UploadImage from "./components/UploadImage";
import Shapes from "./components/Shapes";
import Background from "./components/Backgrounds";

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);
  const { colorMode } = useColorMode();

  const [bg, setBg] = useState("white");
  const [size, setSize] = useState({
    width: "200px",
    height: "200px",
    per: "90%",
  });

  const [boxSize, setBoxSize] = useState({
    w: "300px",
    h: "330px",
  });
  const boolean = boxSize.w === "300px";
  const mbSize = boolean ? "320px" : "165px";

  const handleSubmit = async () => {
    const apiKey = "C9w3gdt7xjt42juKAQnMJ1JK";
    const url = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    await fetch(url, {
      method: "POST",
      headers: { "X-Api-Key": apiKey },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setBgremove(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid templateAreas={`"upload" "templates"`}>
      <GridItem
        area="upload"
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
      >
        <Center>
          {bgremove ? (
            <PhotoBox
              bg={bg}
              size={size}
              nobg={bgremove}
              boxSize={boxSize}
              setBoxSize={setBoxSize}
              boolean={boolean}
            />
          ) : (
            <UploadImage setImage={setImage} onSubmit={handleSubmit} />
          )}
        </Center>
      </GridItem>
      <GridItem
        area="templates"
        bg={colorMode === "light" ? "gray.100" : "gray.600"}
        mt={bgremove ? mbSize : ""}
      >
        <Shapes setSize={setSize} nobg={bgremove} />
        <Background setBg={setBg} nobg={bgremove} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

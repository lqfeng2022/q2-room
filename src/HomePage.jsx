import React, { useState } from "react";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import PhotoBox from "./components/PhotoBox";
import UploadImage from "./components/UploadImage";
import Shapes from "./components/Shapes";
import Background from "./components/Backgrounds";

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);
  const [bg, setBg] = useState("white");
  const [width, setWidth] = useState("200px");
  const [height, setHeight] = useState("200px");
  const [per, setPer] = useState("90%");

  const onSubmit = async () => {
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
      <GridItem area="upload" bg="gray.200">
        <Center>
          {!bgremove && <UploadImage setImage={setImage} onSubmit={onSubmit} />}
          {bgremove && (
            <PhotoBox
              bg={bg}
              height={height}
              width={width}
              nobg={bgremove}
              percent={per}
            />
          )}
        </Center>
      </GridItem>
      <GridItem
        area="templates"
        bg="gray.100"
        marginTop={bgremove ? "320px" : ""}
      >
        <Shapes
          setWidth={setWidth}
          setHeight={setHeight}
          setPer={setPer}
          nobg={bgremove}
        />
        <Background setBg={setBg} nobg={bgremove} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

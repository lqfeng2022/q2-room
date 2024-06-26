import { Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Background from "./components/Backgrounds";
import PhotoBox from "./components/PhotoBox";
import Shapes from "./components/Shapes";
import UploadImage from "./components/UploadImage";
import apiClient from "./services/apiClient";

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);

  const [bg, setBg] = useState("white");
  const [size, setSize] = useState({
    width: "200px",
    height: "200px",
    per: "90%",
  });
  const [boxSize, setBoxSize] = useState({
    w: "150px",
    h: "165px",
  });
  const mbSize = boxSize.w === "300px" ? "320px" : "165px";

  const handleSubmit = async () => {
    const apiKey = apiClient[1].apiKey;
    const url = apiClient[1].url;

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    await fetch(url, {
      method: "POST",
      headers: { "x-api-key": apiKey },
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
      <GridItem area="upload">
        <Center>
          {bgremove ? (
            <PhotoBox
              bg={bg}
              size={size}
              nobg={bgremove}
              boxSize={boxSize}
              setBoxSize={setBoxSize}
            />
          ) : (
            <UploadImage setImage={setImage} onSubmit={handleSubmit} />
          )}
        </Center>
      </GridItem>
      <GridItem area="templates" mt={bgremove ? mbSize : ""}>
        <Shapes setSize={setSize} nobg={bgremove} />
        <Background setBg={setBg} nobg={bgremove} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

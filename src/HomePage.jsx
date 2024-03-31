import { Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Background from "./components/Backgrounds";
import PhotoBox from "./components/PhotoBox";
import Shapes from "./components/Shapes";
import UploadImage from "./components/UploadImage";

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
    const apiKey = "C9w3gdt7xjt42juKAQnMJ1JK";
    const url = "https://api.remove.bg/v1.0/removebg";

    const apiKey2 = "5e1ff56ab1dcca900a432c5c99854469106f1032";
    const url2 = "https://sdk.photoroom.com/v1/segment";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    await fetch(url2, {
      method: "POST",
      headers: { "x-api-key": apiKey2 },
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

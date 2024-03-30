import {
  Box,
  Button,
  Center,
  Icon,
  Text,
  VisuallyHiddenInput,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const UploadImage = ({ setImage, onSubmit }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack bg={colorMode === "light" ? "gray.200" : "gray.700"}>
      <Center padding={6}>
        <Box>
          <label
            htmlFor="dropzone-file"
            style={{ border: "3px dashed gray" }}
            className="px-5 border-opacity-50 rounded-3"
          >
            <Center paddingY="13px">
              <Icon as={IoCloudUploadOutline} color="gray" boxSize={10} />
            </Center>
            <Center paddingY="5px">
              <Text fontSize="xl" as="b">
                Click to Upload
              </Text>
            </Center>
            <Center>
              <Text fontSize="small">PNG, JPG/JPEG or WEBP (MAX. 10MB)</Text>
            </Center>
            <VisuallyHiddenInput
              id="dropzone-file"
              type="file"
              accept=".jpg, .png, .webp"
              size="sm"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Center paddingY="13px">
              <Button colorScheme="purple" onClick={onSubmit}>
                Submit
              </Button>
            </Center>
          </label>
        </Box>
      </Center>
    </Stack>
  );
};

export default UploadImage;

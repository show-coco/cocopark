import { Box, CloseButton, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useFileSelector } from "hooks/useFileSelector";
import { forwardRef, InputHTMLAttributes, useRef } from "react";
import { MdCloudUpload } from "react-icons/md";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (image: File | undefined) => void;
};

export const FileSelector = forwardRef<HTMLInputElement, Props>(
  ({ onChange, ...props }) => {
    const ref = useRef<HTMLInputElement>(null);
    const fileSelector = useFileSelector(onChange);

    const onClick = () => {
      ref.current?.click();
    };

    return !fileSelector.imageBlob ? (
      <button onClick={onClick} style={{ width: "100%" }}>
        <input
          type="file"
          hidden
          aria-hidden
          ref={ref}
          onChange={fileSelector.onFileChange}
          {...props}
        />
        <Flex
          justify="center"
          alignItems="center"
          border="1px dashed"
          borderColor="gray.primary"
          rounded="lg"
          h="360px"
          flexDir="column"
          cursor="pointer"
        >
          <Icon
            as={MdCloudUpload}
            h="96px"
            w="96px"
            color="gray.primary"
            opacity="0.4"
            mb="6px"
          />
          <Text textStyle="h6" mb="5px">
            Drag your item to upload
          </Text>
          <Text textStyle="text.14.regular">
            PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
          </Text>
        </Flex>
      </button>
    ) : (
      <Box
        backgroundImage={fileSelector.imageBlob}
        h="360px"
        rounded="lg"
        backgroundSize="cover"
        __css={{ aspectRatio: "620/360" }}
      >
        <Flex justify="flex-end" pt="10px" pr="10px">
          <CloseButton
            color="black"
            rounded="full"
            bgColor="white"
            opacity={0.5}
            _hover={{ opacity: 0.7 }}
            onClick={fileSelector.onFileRemove}
          />
        </Flex>
      </Box>
    );
  }
);

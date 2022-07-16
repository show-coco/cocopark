import { Tag, TagProps, Text } from "@chakra-ui/react";
import { FC } from "react";

export const SoftTag: FC<TagProps> = (props) => {
  return (
    <Tag
      bgColor="purple.resting"
      color="purple.primary"
      px="32px"
      h="36px"
      rounded="full"
      whiteSpace="nowrap"
    >
      <Text textStyle="text.12.bold">{props.children}</Text>
    </Tag>
  );
};

export const LightTag: FC<TagProps> = (props) => {
  return (
    <Tag
      px="32px"
      h="36px"
      rounded="full"
      border="1px solid"
      borderColor="outline.light"
      bgColor="white"
      whiteSpace="nowrap"
    >
      <Text textStyle="text.12.bold">{props.children}</Text>
    </Tag>
  );
};

import { Tag, TagProps, Text } from "@chakra-ui/react";
import { FC } from "react";

export const SoftTag: FC<TagProps> = (props) => {
  return (
    <Tag
      bgColor="purple.resting"
      color="purple.primary"
      px="32px"
      h="32px"
      rounded="full"
    >
      <Text textStyle="text.12.bold">{props.children}</Text>
    </Tag>
  );
};

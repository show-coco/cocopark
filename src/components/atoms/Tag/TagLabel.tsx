import { TagLabel as ChakraTagLabel, TagLabelProps } from "@chakra-ui/react";
import { FC } from "react";

export const TagLabel: FC<TagLabelProps> = (props) => {
  return (
    <ChakraTagLabel textStyle="text.12.bold" {...props}>
      {props.children}
    </ChakraTagLabel>
  );
};

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const OutlineAccordionItem: FC<Props> = ({ children, title }) => {
  return (
    <Box border="1px solid" borderColor="outline.light" rounded="lg">
      <AccordionItem border="none">
        <AccordionButton py="18px">
          <Text flex="1" textAlign="left" textStyle="text.14.bold">
            {title}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Box>
  );
};

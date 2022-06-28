import { Box, Heading, HStack } from "@chakra-ui/react";
import { ItemCardV7 } from "components/organisms/Card/ItemCard/ItemCardV7";
import { FC } from "react";

export const Section2: FC = () => {
  return (
    <Box px="80px" mx="auto" textAlign="center">
      <Heading as="h3" textStyle="h3" mb="42px">
        Selected notable drops
      </Heading>

      <HStack spacing="24px" mb="90px">
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
      </HStack>
    </Box>
  );
};

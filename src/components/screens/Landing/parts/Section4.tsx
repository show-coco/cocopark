import { Box, Heading, HStack } from "@chakra-ui/react";
import { ItemCardV5 } from "components/organisms/Card/ItemCard/ItemCardV5";
import { FC } from "react";

export const Section4: FC = () => {
  return (
    <Box px="80px" textAlign="center" mx="auto" mb="90px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Trending NFTs
      </Heading>

      <HStack spacing="24px">
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
      </HStack>
    </Box>
  );
};

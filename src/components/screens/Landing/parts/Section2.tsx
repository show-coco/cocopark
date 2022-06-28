import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { ItemCardV7 } from "components/organisms/Card/ItemCard/ItemCardV7";
import { mobileMediaQuery } from "config/chakra-ui";
import { FC } from "react";

export const Section2: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <Box px="80px" mx="auto" textAlign="center">
      <Heading as="h3" textStyle="h3" mb="42px">
        Selected notable drops
      </Heading>

      <SimpleGrid
        w="fit-content"
        spacing="24px"
        mx="auto"
        columns={{ tablet: 2, laptop: 4 }}
        mb="90px"
      >
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
      </SimpleGrid>
    </Box>
  );
};

const Mobile: FC = () => {
  return (
    <Box px="30px" textAlign="center">
      <Heading as="h3" textStyle="h3" mb="42px">
        Selected notable drops
      </Heading>

      <HStack spacing="24px" mb="90px" overflowY="scroll">
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
        <ItemCardV7 />
      </HStack>
    </Box>
  );
};

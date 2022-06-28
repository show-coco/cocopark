import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { ItemCardV5 } from "components/organisms/Card/ItemCard/ItemCardV5";
import { mobileMediaQuery } from "config/chakra-ui";
import { FC } from "react";

export const Section4: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <Box px="80px" textAlign="center" mx="auto" mb="90px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Trending NFTs
      </Heading>

      <SimpleGrid
        spacing="24px"
        columns={{ tablet: 2, laptop: 4 }}
        mx="auto"
        w="fit-content"
      >
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
      </SimpleGrid>
    </Box>
  );
};

const Mobile: FC = () => {
  return (
    <Box px="30px" textAlign="center" mx="auto" mb="90px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Trending NFTs
      </Heading>

      <HStack spacing="24px" overflowY="scroll">
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
        <ItemCardV5 />
      </HStack>
    </Box>
  );
};

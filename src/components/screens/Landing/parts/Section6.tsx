import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react";
import { ItemCardV4 } from "components/organisms/Card/ItemCard/ItemCardV4";
import { mobileMediaQuery } from "config/chakra-ui";
import { FC } from "react";

export const Section6: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <Box px="80px" mx="auto" py="60px" textAlign="center">
      <Heading as="h3" textStyle="h3" mb="44px">
        Browse popular NFTs
      </Heading>

      <Tabs align="center" colorScheme="blackAlpha">
        <TabList borderBottom="1px solid">
          <Tab>All</Tab>
          <Tab>Trending</Tab>
          <Tab>Collectibles</Tab>
          <Tab>Domain Names</Tab>
          <Tab>Music</Tab>
          <Tab>Photography</Tab>
        </TabList>

        <TabPanels mt="40px">
          <TabPanel>
            <SimpleGrid
              columns={{ tablet: 2, laptop: 4 }}
              spacing="24px"
              w="fit-content"
            >
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const Mobile: FC = () => {
  return (
    <Box mx="auto" py="60px" textAlign="center">
      <Heading as="h3" textStyle="h3" mb="44px">
        Browse popular NFTs
      </Heading>

      <Tabs align="center" colorScheme="blackAlpha">
        <TabList borderBottom="1px solid" overflowY="scroll">
          <Tab>All</Tab>
          <Tab>Trending</Tab>
          <Tab>Collectibles</Tab>
          <Tab>Domain Names</Tab>
        </TabList>

        <TabPanels mt="40px" px="30px">
          <TabPanel p="0">
            <HStack spacing="24px" overflowY="scroll">
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
              <ItemCardV4 />
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

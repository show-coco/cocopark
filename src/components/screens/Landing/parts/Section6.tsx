import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ItemCardV4 } from "components/organisms/Card/ItemCard/ItemCardV4";
import { FC } from "react";

export const Section6: FC = () => {
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
            <SimpleGrid columns={4} spacing="24px">
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

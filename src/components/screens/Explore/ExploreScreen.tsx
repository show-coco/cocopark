import {
  Box,
  Center,
  Grid,
  Heading,
  HStack,
  Icon,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import {
  FilledRestingButton,
  OutlineRestingButton,
} from "components/atoms/Button/Button";
import { Tab } from "components/atoms/Tab/Tab";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { FC } from "react";
import { BsFilter } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";

export const ExploreScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />

      <Box px="80px" pt="40px">
        <Heading as="h1" textStyle="h1">
          Explore NFTs
        </Heading>

        <Tabs variant="soft-rounded">
          <HStack mt="15px" justify="space-between">
            <TabList gap="6px">
              <Tab>All</Tab>
              <Tab>Trending</Tab>
              <Tab>Collectibles</Tab>
              <Tab>Domain Names</Tab>
              <Tab>Music</Tab>
              <Tab>Photography</Tab>
            </TabList>

            <HStack spacing="6px">
              <OutlineRestingButton
                leftIcon={<Icon h="16px" w="16px" as={BsFilter} />}
              >
                Apply filter
              </OutlineRestingButton>
              <OutlineRestingButton
                leftIcon={<Icon h="16px" w="16px" as={TbArrowsSort} />}
              >
                Sort by
              </OutlineRestingButton>
            </HStack>
          </HStack>

          <Grid
            mt="40px"
            gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
            gap="24px"
          >
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
            <ItemCardV6 />
          </Grid>
        </Tabs>

        <Center my="40px">
          <FilledRestingButton w="240px">Load More</FilledRestingButton>
        </Center>
      </Box>

      <Footer />
    </Box>
  );
};

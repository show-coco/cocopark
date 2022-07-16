import {
  Accordion,
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  FilledRestingButton,
  OutlineRestingButton,
} from "components/atoms/Button/Button";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { ArrowsSortIcon } from "components/atoms/Icon/ArrowsSort";
import { DiscordIcon } from "components/atoms/Icon/DiscordIcon";
import { DotsIcon } from "components/atoms/Icon/DotsIcon";
import { FacebookIcon } from "components/atoms/Icon/FacebookIcon";
import { HeartIcon } from "components/atoms/Icon/HeartIcon";
import { PublicIcon } from "components/atoms/Icon/PublicIcon";
import { ResetIcon } from "components/atoms/Icon/ResetIcon";
import { TwitterIcon } from "components/atoms/Icon/TwitterIcon";
import { SearchInput } from "components/atoms/Input/SearchInput";
import { OutlineAccordionItem } from "components/molecules/AccordionItem/OutlineAccordionItem/OutlineAccordionItem";
import { BarRangeSlider } from "components/molecules/RangeSlider/BarRangeSlider/BarRangeSlider";
import { AnalyticsCounterCard } from "components/organisms/Card/AnalyticsCounterCard/AnalyticsCounterCard";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { PropertyItem } from "components/organisms/Item/PropertyItem/PropertyItem";
import { FC } from "react";

export const CollectionDetailScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Box mb="102px">
        <CollectionHeader />
        <Flex justifyContent="center" mt="-32px">
          <Avatar src="/Art1.png" size="lg" border="2px solid white" />
        </Flex>
        <Box w="490px" marginX="auto" textAlign="center" mt="16px">
          <Heading as="h1" textStyle="h1">
            Famous Minions
          </Heading>
          <Text color="gray.primary" mt="8px">
            8,888 NFTs of beautiful, Asian women painstakingly-crafted where
            even the most intricate details are steeped in historical
            significance.
          </Text>
          <SNSLinks />
        </Box>

        <AnalyticsCards />

        <Flex px="60px">
          <Box w="300px" mr="36px">
            <HStack justify="space-between" mb="42px">
              <Text textStyle="h3">Filters</Text>
              <OutlineRestingButton leftIcon={<ResetIcon />} px="20px">
                Reset
              </OutlineRestingButton>
            </HStack>

            <Accordion
              allowToggle
              allowMultiple
              display="flex"
              flexDir="column"
              gap="10px"
            >
              <StatusAccordionItem />
              <PriceAccordionItem />
              <PropertyAccordionItem />
            </Accordion>
          </Box>
          <Box flex="1 0 0">
            <HStack mb="38px">
              <SearchInput placeholder="Search items" />
              <OutlineRestingButton leftIcon={<ArrowsSortIcon />}>
                Sort by
              </OutlineRestingButton>
            </HStack>

            <Flex flexWrap="wrap" gap="24px">
              <ItemCardV6 />
              <ItemCardV6 />
              <ItemCardV6 />
              <ItemCardV6 />
              <ItemCardV6 />
              <ItemCardV6 />
              <ItemCardV6 />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

const StatusAccordionItem: FC = () => {
  return (
    <OutlineAccordionItem title="Status">
      <Flex flexWrap="wrap" gap="8px">
        <FilledRestingButton size="sm">Buy Now</FilledRestingButton>
        <OutlineRestingButton size="sm">On Auction</OutlineRestingButton>
        <OutlineRestingButton size="sm">Accept Offer</OutlineRestingButton>
        <OutlineRestingButton size="sm">New</OutlineRestingButton>
      </Flex>
    </OutlineAccordionItem>
  );
};

const PropertyAccordionItem: FC = () => {
  return (
    <OutlineAccordionItem title="Background">
      <Flex w="full" flexDir="column" gap="8px">
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
      </Flex>
    </OutlineAccordionItem>
  );
};

const PriceAccordionItem: FC = () => {
  return (
    <OutlineAccordionItem title="Price">
      <BarRangeSlider
        dataSet={[
          2, 5, 10, 15, 23, 2, 4, 24, 2, 34, 34, 4, 29, 23, 1, 13, 8, 3,
        ]}
        min={2.43}
        max={200}
      />
    </OutlineAccordionItem>
  );
};

const SNSLinks: FC = () => {
  return (
    <HStack mt="22px" justify="center">
      <FilledRestingIconButton
        aria-label="twitter"
        size="lg"
        icon={<TwitterIcon />}
      />
      <FilledRestingIconButton
        aria-label="discord"
        size="lg"
        icon={<DiscordIcon />}
      />
      <FilledRestingIconButton
        aria-label="facebook"
        size="lg"
        icon={<FacebookIcon />}
      />
      <FilledRestingIconButton
        aria-label="public"
        size="lg"
        icon={<PublicIcon />}
      />
    </HStack>
  );
};

const CollectionHeader: FC = () => {
  return (
    <Box
      w="full"
      h="auto"
      backgroundImage="/Bg.png"
      backgroundSize="cover"
      __css={{ aspectRatio: "5 / 1" }}
    >
      <Flex justify="flex-end" gap="6px" pt="30px" pr="40px">
        <OutlineRestingButton leftIcon={<HeartIcon />}>
          Add to wishlist
        </OutlineRestingButton>
        <FilledRestingIconButton aria-label="actions" icon={<DotsIcon />} />
      </Flex>
    </Box>
  );
};

const AnalyticsCards = () => {
  return (
    <HStack mt="50px" justify="center" mb="57px">
      <AnalyticsCounterCard />
      <AnalyticsCounterCard />
      <AnalyticsCounterCard />
      <AnalyticsCounterCard />
    </HStack>
  );
};

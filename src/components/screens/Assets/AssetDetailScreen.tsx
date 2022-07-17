import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { FC } from "react";
import { omitAddress } from "utils/address";
import { FavoriteButton } from "components/atoms/Button/FavoriteButton";
import { AvatarName } from "components/molecules/AvatarName/AvatarName";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { DotsIcon } from "components/atoms/Icon/DotsIcon";
import { LightTag } from "components/atoms/Tag/Tag";
import { OffersTable } from "components/organisms/Table/OffersTable/OffertsTable";
import { PriceHistory } from "components/organisms/Chart/PriceHistory/PriceHistory";
import { ItemActivityTable } from "components/organisms/Table/ItemActivityTable/ItemActivityTable";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { BuyActionCard } from "components/organisms/Card/ActionCard/ActionCard";

export const AssetDetailScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Flex px="60px" py="40px">
        <Box mr="24px" w="50%">
          <Image src="/Art1.png" rounded="lg" __css={{ aspectRatio: "1/1" }} />
          <Box mt="24px">
            <OffersTable />
          </Box>
        </Box>

        <Box mt="26px" w="50%">
          <HStack justify="space-between">
            <AvatarName
              href="/collections/1"
              icon="/Art0.png"
              name="Trending Arts"
              size="lg"
            />

            <HStack>
              <FavoriteButton />
              <FilledRestingIconButton
                aria-label="actions"
                icon={<DotsIcon />}
              />
            </HStack>
          </HStack>

          <Heading as="h2" textStyle="h1" mt="28px">
            Wicked Cranium #4449
          </Heading>
          <Text textStyle="text.16.regular" mt="8px">
            A collection of 10,000 undead NFTs minted on the Ethereum
            blockchain. Each unique Deadfella is randomly generated from a
            combination.
          </Text>

          <HStack mt="24px" spacing="33px">
            <Box>
              <Text textStyle="text.12.medium" mb="10px">
                Owner
              </Text>
              <AvatarName
                icon="/Art0.png"
                name={omitAddress("0x9853D4659A2C57127E1Fa8F48C345b15966345CF")}
                size="lg"
                href="/users/1"
              />
            </Box>

            <Box>
              <Text textStyle="text.12.medium" mb="10px">
                Creator
              </Text>
              <AvatarName
                icon="/Art0.png"
                name={omitAddress("0x9853D4659A2C57127E1Fa8F48C345b15966345CF")}
                size="lg"
                href="/users/1"
              />
            </Box>
          </HStack>

          <Box mt="24px" mb="28px">
            <Text textStyle="text.12.medium" mb="10px">
              Propaties
            </Text>

            <Flex flexWrap="wrap" gap="6px">
              <LightTag>Background: Blue</LightTag>
              <LightTag>Mouth grade: Fresh</LightTag>
              <LightTag>2400 x 2278 px (1.72MB)</LightTag>
              <LightTag>Head: Bowlcut</LightTag>
            </Flex>
          </Box>

          <Box mb="24px">
            <BuyActionCard />
          </Box>

          <PriceHistory />
        </Box>
      </Flex>

      <Box px="60px" mb="40px">
        <ItemActivityTable />
      </Box>

      <Box px="60px" mb="60px">
        <Heading as="h3" textStyle="h3" mb="36px">
          More from this collection
        </Heading>

        <Flex gap="24px" flexWrap="wrap">
          <ItemCardV6 />
          <ItemCardV6 />
          <ItemCardV6 />
          <ItemCardV6 />
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

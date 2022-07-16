import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FilledButton,
  FilledRestingButton,
} from "components/atoms/Button/Button";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { FC } from "react";
import ETHIcon from "../../../assets/svg/ETH.svg";
import { omitAddress } from "utils/address";
import { FavoriteButton } from "components/atoms/Button/FavoriteButton";
import { TimerIcon } from "components/atoms/Icon/Timer";
import { AvatarAndName } from "components/molecules/AvatarAndName/AvatarAndName";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { DotsIcon } from "components/atoms/Icon/DotsIcon";
import { LightTag } from "components/atoms/Tag/Tag";
import { OffersTable } from "components/organisms/Table/OffersTable/OffertsTable";
import { PriceHistory } from "components/organisms/Chart/PriceHistory/PriceHistory";
import { ItemActivityTable } from "components/organisms/Table/ItemActivityTable/ItemActivityTable";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";

export const AssetDetailScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Flex px="60px" py="40px">
        <Box mr="24px" w="50%">
          <Image src="/Art1.png" rounded="lg" />
          <Box mt="24px">
            <OffersTable />
          </Box>
        </Box>

        <Box mt="26px" w="50%">
          <HStack justify="space-between">
            <AvatarAndName
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
              <AvatarAndName
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
              <AvatarAndName
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
            <ActionCard />
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

const ActionCard: FC = () => {
  return (
    <Flex mt="12px" boxShadow="lg" p="20px 24px" rounded="lg">
      <Box mr="12px">
        <Box h="70px">
          <Text textStyle="text.12.medium" color="gray.primary">
            Top bid
          </Text>

          <HStack mt="9px">
            <Box
              display="inline-flex"
              rounded="full"
              bgColor="soft.primary"
              justifyContent="center"
              alignItems="center"
              p="10px"
            >
              <Icon h="16px" w="16px" as={ETHIcon} />
            </Box>

            <Text textStyle="h6">2.87 ETH ($9.1k USD)</Text>
          </HStack>
        </Box>

        <FilledButton w="284px" mt="27px" py="12px">
          Place your bid
        </FilledButton>
      </Box>

      <Box flex="1 0 0">
        <Box h="70px">
          <Text textStyle="text.12.medium" color="gray.primary">
            Sale ends in
          </Text>

          <HStack mt="9px">
            <Box
              display="inline-flex"
              rounded="full"
              bgColor="soft.primary"
              justifyContent="center"
              alignItems="center"
              p="10px"
            >
              <TimerIcon h="20px" w="20px" />
            </Box>

            <Flex align="center">
              <Text textStyle="h6">3</Text>
              <Text textStyle="text.16.regular" mr="4px">
                d
              </Text>
              <Text textStyle="h6">: 10</Text>
              <Text textStyle="text.16.regular" mr="4px">
                h
              </Text>
              <Text textStyle="h6">: 40</Text>
              <Text textStyle="text.16.regular" mr="4px">
                m
              </Text>
              <Text textStyle="h6">: 37</Text>
              <Text textStyle="text.16.regular" mr="4px">
                s
              </Text>
            </Flex>
          </HStack>
        </Box>

        <FilledRestingButton w="284px" mt="27px">
          Buy now
        </FilledRestingButton>
      </Box>
    </Flex>
  );
};

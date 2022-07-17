import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { DotsIcon } from "components/atoms/Icon/DotsIcon";
import { Tab } from "components/atoms/Tab/Tab";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { SNSLinks } from "components/organisms/Links/SNSLinks/SNSLinks";
import { FC } from "react";
import { MdSupervisorAccount } from "react-icons/md";

export const UserDetailScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Box mb="48px">
        <Box
          backgroundImage="/Bg.png"
          backgroundSize="cover"
          w="full"
          __css={{ aspectRatio: "5/1" }}
        ></Box>
        <Box mt="-48px" px="74px">
          <Avatar size="xl" src="/Art1.png" border="2px solid white" />
        </Box>

        <Flex mt="18px" px="74px">
          <Box w="290px" mr="42px">
            <Heading as="h3">Waiano Akarana</Heading>
            <Text
              textStyle="text.14.bold"
              color="gray.primary"
              mt="5px"
              noOfLines={1}
            >
              0x9853D4659A2C57127E1Fa8F48C345b15966345CF
            </Text>
            <Text textStyle="text.14.regular" color="gray.primary" mt="32px">
              8,888 NFTs of beautiful, Asian women painstakingly-crafted where
              even the most intricate details are steeped
            </Text>
            <SNSLinks my="20px" />
            <Divider />
            <HStack justify="space-between" py="18px">
              <VStack gap="6px">
                <Text textStyle="h6">96</Text>
                <Text color="gray.primary">following</Text>
              </VStack>
              <VStack gap="6px">
                <Text textStyle="h6">96</Text>
                <Text color="gray.primary">followers</Text>
              </VStack>
              <VStack gap="6px">
                <Text textStyle="h6">96</Text>
                <Text color="gray.primary">items</Text>
              </VStack>
            </HStack>

            <Divider />

            <HStack mt="32px">
              <FilledButton leftIcon={<MdSupervisorAccount />}>
                Follow
              </FilledButton>
              <FilledRestingIconButton
                aria-label="actions"
                icon={<DotsIcon />}
              />
            </HStack>
          </Box>
          <Box flex="1">
            <Tabs variant="soft-rounded">
              <HStack mt="15px" justify="space-between">
                <TabList gap="6px">
                  <Tab>On Sale</Tab>
                  <Tab>Owned</Tab>
                  <Tab>Created</Tab>
                  <Tab>Collections</Tab>
                  <Tab>Following</Tab>
                  <Tab>Activity</Tab>
                </TabList>
              </HStack>

              <TabPanels p="0" mt="42px">
                <TabPanel p="0">
                  <Flex flexWrap="wrap" gap="24px">
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                    <ItemCardV6 />
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

import {
  Box,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tab,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  FilledButton,
  OutlineRestingButton,
} from "components/atoms/Button/Button";
import { MetamaskIcon } from "components/atoms/Icon/MemamaskIcon";
import { WalletConnectIcon } from "components/atoms/Icon/WalletConnectIcon";
import { SimpleHeader } from "components/organisms/Header/GuestHeader";
import { AssetNewTemplate } from "components/templates/AssetNewTemplate/AssetNewTemplate";
import Link from "next/link";
import { FC } from "react";

export const AssetNewChooseWalletScreen: FC = () => {
  return (
    <AssetNewTemplate
      title="Choose blockchain"
      description="Connect with one of our available wallet providers or create a new one."
    >
      <Flex justify="center">
        <Tabs colorScheme="blackAlpha" w="410px">
          <TabList mb="24px">
            <Tab>Ethereum</Tab>
            <Tab>Ethereum</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <VStack>
                <OutlineRestingButton w="full" leftIcon={<MetamaskIcon />}>
                  Metamask
                </OutlineRestingButton>
                <OutlineRestingButton w="full" leftIcon={<WalletConnectIcon />}>
                  WalletConnect
                </OutlineRestingButton>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>

      <Center mt="48px">
        <Link href="/assets/new?step=asset">
          <FilledButton w="410px">Next</FilledButton>
        </Link>
      </Center>
    </AssetNewTemplate>
  );
};

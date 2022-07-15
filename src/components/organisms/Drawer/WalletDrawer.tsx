import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { CopyIconButton } from "components/atoms/Button/CopyButton";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { ERC20_SYMBOL, NATIVE_TOKEN_ICONS, useERC20 } from "hooks/useERC20";
import { useNativeToken } from "hooks/useNativeToken";
import { FC, useEffect, useState } from "react";
import { TokenAmount } from "types/domain";
import { omitAddress } from "utils/address";
import { TokenBalance } from "../TokenBalance/TokenBalance";

type Props = Omit<DrawerProps, "children"> & {
  account: string;
};

export const WalletDrawer: FC<Props> = ({ account, ...props }) => {
  const { data: weth } = useERC20(ERC20_SYMBOL.WETH, account);
  const { data: eth } = useNativeToken(account);

  return (
    <Drawer placement="right" {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <HStack>
            <Avatar src="/Art1.png" size="md" />
            <Flex w="full" alignItems="flex-start" flexDir="column">
              <Text textStyle="text.16.regular">Ropital</Text>
              <HStack>
                <Text textStyle="text.16.regular" color="gray.primary">
                  {account && omitAddress(account)}
                </Text>
                {account && <CopyIconButton address={account} />}
              </HStack>
            </Flex>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <VStack>
            {eth?.formatted && (
              <TokenBalance
                symbol="ETH"
                chain="Ethereum"
                amount={eth?.formatted}
                icon={NATIVE_TOKEN_ICONS["ETH"]}
              />
            )}

            {weth?.amount.formatted && (
              <TokenBalance
                symbol="WETH"
                chain="Ethereum"
                amount={weth?.amount.formatted}
                icon={weth.icon}
              />
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

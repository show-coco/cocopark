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
import { FC, useEffect, useState } from "react";
import { TokenAmount } from "types/domain";
import { omitAddress } from "utils/address";
import { TokenBalance } from "../TokenBalance/TokenBalance";

type Props = Omit<DrawerProps, "children">;

export const WalletDrawer: FC<Props> = ({ ...props }) => {
  const { account, library } = useWeb3React();
  if (!account) return null;

  const { data: weth } = useERC20(ERC20_SYMBOL.WETH, account);
  const [ethBalance, setEthBalance] = useState<TokenAmount>();

  const setBalance = async () => {
    const _ethBalance: BigNumber = await library.getBalance(account);

    setEthBalance({
      hex: _ethBalance._hex,
      formatted: parseFloat(formatEther(_ethBalance)).toPrecision(4),
    });
  };

  useEffect(() => {
    if (account) {
      setBalance();
    }
  }, [account]);

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
            {ethBalance?.formatted && (
              <TokenBalance
                symbol="ETH"
                chain="Ethereum"
                amount={ethBalance?.formatted}
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

import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  symbol: string;
  chain: string;
  amount: string;
  icon: any;
};

export const TokenBalance: FC<Props> = ({ symbol, chain, amount, icon }) => {
  return (
    <HStack
      border="1px solid"
      borderColor="outline.light"
      rounded="md"
      p="10px 14px"
      justify="space-between"
      w="full"
    >
      <HStack>
        <Icon as={icon} h="18px" w="18px" mr="6px" />
        <Box>
          <Text textStyle="text.16.regular">{symbol}</Text>
          <Text textStyle="text.16.regular" color="gray.primary">
            {chain}
          </Text>
        </Box>
      </HStack>

      <Box>
        {amount} {symbol}
      </Box>
    </HStack>
  );
};

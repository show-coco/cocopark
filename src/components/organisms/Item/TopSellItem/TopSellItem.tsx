import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import ETHIcon from "../../../../assets/svg/ETH.svg";

type Props = {
  number: number;
  collectionIcon: string;
  currencyIcon: string;
  currentValue: number;
  percentage: number;
};

export const TopSellItem: FC<Props> = ({
  number,
  collectionIcon,
  currencyIcon,
  currentValue,
  percentage,
}) => {
  return (
    <Flex alignItems="center" minW="280px" w="full" maxW="410px">
      <Text textStyle="text.14.bold" mr="20px">
        {number}
      </Text>
      <Avatar src={collectionIcon} size="lg" mr="18px" />
      <Box w="100%">
        <Text mb="6px" textStyle="button.16">
          Bored Ape Yacht Club
        </Text>
        <Flex justify="space-between" alignItems="center">
          <Flex alignItems="center">
            <Icon h="20px" w="20px" mr="6px">
              <ETHIcon />
            </Icon>
            <Text textStyle="text.14.regular">
              {currentValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </Flex>

          <Text textStyle="text.14.regular" color={"green"}>
            +
            {percentage.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            %
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

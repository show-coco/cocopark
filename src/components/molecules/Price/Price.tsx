import { HStack, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import ETHIcon from "../../../assets/svg/ETH.svg";

export const Price: FC = () => {
  return (
    <HStack spacing="6px" justify="center">
      <Icon h="22px" w="22px">
        <ETHIcon />
      </Icon>
      <Text textStyle="text.14.bold">0.45 ETH</Text>
    </HStack>
  );
};

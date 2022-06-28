import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Logo } from "./Logo";

export const LogoHoriziontal: FC = () => {
  return (
    <Flex alignItems="center">
      <Logo />
      <Text fontSize="18px" fontWeight="bold" ml="8px">
        NEOFT
      </Text>
    </Flex>
  );
};

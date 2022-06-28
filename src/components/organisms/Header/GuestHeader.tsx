import { Flex, HStack } from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { NavLink } from "components/atoms/Link/NavLink";
import { Logo } from "components/atoms/Logo/Logo";
import { FC } from "react";

export const GuestHeader: FC = () => {
  return (
    <Flex
      as="header"
      h="84px"
      alignItems="center"
      px="32px"
      justify="space-between"
    >
      <Logo w="40px" h="40px" />

      <Flex>
        <HStack spacing="29px">
          <NavLink href="/">Explore</NavLink>
          <NavLink href="/">Stats</NavLink>
          <NavLink href="/">Drops</NavLink>
          <NavLink href="/">Activity</NavLink>
        </HStack>
        <FilledButton ml="32px">Sign In</FilledButton>
      </Flex>
    </Flex>
  );
};

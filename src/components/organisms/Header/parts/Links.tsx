import { HStack } from "@chakra-ui/react";
import { NavLink } from "components/atoms/Link/NavLink";
import { ROUTES } from "constants/routes";
import { FC } from "react";

export const Links: FC = () => {
  return (
    <HStack spacing="29px">
      <NavLink href={ROUTES.explore}>Explore</NavLink>
      <NavLink href="/">Stats</NavLink>
      <NavLink href="/">Drops</NavLink>
      <NavLink href="/">Activity</NavLink>
    </HStack>
  );
};

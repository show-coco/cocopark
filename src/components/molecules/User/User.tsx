import { Avatar, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const User: FC = () => {
  return (
    <Link href="#user">
      <HStack spacing="8px">
        <Avatar size="sm" />
        <Text textStyle="text.14.regular">Election Season</Text>
      </HStack>
    </Link>
  );
};

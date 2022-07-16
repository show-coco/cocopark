import { Avatar, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

type Props = {
  size?: "md" | "lg";
  icon?: string;
  name: string;
  href: string;
};

export const AvatarAndName: FC<Props> = ({ icon, name, href, size = "md" }) => {
  switch (size) {
    case "lg":
      return (
        <NextLink href={href}>
          <Link>
            <HStack>
              <Avatar src={icon} />
              <Text textStyle="text.14.bold">{name}</Text>
            </HStack>
          </Link>
        </NextLink>
      );

    case "md":
    default:
      return (
        <NextLink href={href}>
          <Link>
            <HStack spacing="8px">
              <Avatar src={icon} size="sm" />
              <Text textStyle="text.14.regular">{name}</Text>
            </HStack>
          </Link>
        </NextLink>
      );
  }
};

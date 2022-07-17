import { Avatar, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

type Props = {
  href: string;
};

export const AvatarNameId: FC<Props> = ({ href }) => {
  return (
    <HStack>
      <Avatar src="/Art1.png" size="lg" />
      <Flex flexDir="column">
        <Heading as="h3">Philadelphia Collect</Heading>
        <NextLink href={href}>
          <Link w="fit-content">
            <Text textStyle="text.14.bold" color="purple.primary">
              @philadelphiacollect
            </Text>
          </Link>
        </NextLink>
      </Flex>
    </HStack>
  );
};

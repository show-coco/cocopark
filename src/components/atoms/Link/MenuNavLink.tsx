import { BoxProps, Flex, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

type Props = BoxProps & {
  href: string;
  icon: any;
};

export const MenuNavLink: FC<Props> = ({ href, icon, ...props }) => {
  return (
    <NextLink href={href}>
      <Flex
        rounded="full"
        w="full"
        cursor="pointer"
        p="17px 21px"
        textStyle="text.14.bold"
        alignItems="center"
        _hover={{ bgColor: "soft.light" }}
      >
        <Icon h="22px" w="22px" mr="14px" as={icon} />
        {props.children}
      </Flex>
    </NextLink>
  );
};

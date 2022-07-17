import { FC, ReactNode } from "react";
import { Link, LinkProps } from "./Link";
import NextLink from "next/link";
import { HStack, Icon, Text } from "@chakra-ui/react";

export const NavLink: FC<LinkProps> = (props) => {
  return (
    <Link textStyle="button.16" color="gray.primary" {...props}>
      {props.children}
    </Link>
  );
};

type SidebarNavLinkProps = {
  href: string;
  isActive: boolean;
  icon: any;
  children: ReactNode;
};

export const SidebarNavLink: FC<SidebarNavLinkProps> = ({
  children,
  href,
  isActive,
  icon,
}) => {
  return (
    <NextLink href={href}>
      <a>
        <HStack
          rounded="full"
          p="12px 21px"
          cursor="pointer"
          w="240px"
          bgColor={isActive ? "soft.light" : ""}
          spacing="14px"
        >
          <Icon w="22px" h="22px" as={icon} />
          <Text textStyle="text.14.bold">{children}</Text>
        </HStack>
      </a>
    </NextLink>
  );
};

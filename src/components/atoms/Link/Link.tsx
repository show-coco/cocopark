import { FC } from "react";
import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

export type LinkProps = ChakraLinkProps & {
  href: string;
};

export const Link: FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href}>
      <ChakraLink {...props}>{props.children}</ChakraLink>
    </NextLink>
  );
};

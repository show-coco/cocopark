import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Twitter from "../../../assets/svg/TwitterColored.svg";

type Props = IconProps;

export const TwitterIcon: FC<Props> = (props) => (
  <Icon as={Twitter} {...props} />
);

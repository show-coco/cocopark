import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Facebook from "../../../assets/svg/Facebook.svg";

type Props = IconProps;

export const FacebookIcon: FC<Props> = (props) => (
  <Icon as={Facebook} {...props} />
);

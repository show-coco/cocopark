import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import LogoSVG from "../../../assets/svg/Logo.svg";

export const Logo: FC<IconProps> = (props) => {
  return (
    <Icon w="32px" h="32px" {...props}>
      <LogoSVG />
    </Icon>
  );
};

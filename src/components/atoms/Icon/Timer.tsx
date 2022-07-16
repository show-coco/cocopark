import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Timer from "../../../assets/svg/Timer.svg";

type Props = IconProps;

export const TimerIcon: FC<Props> = (props) => (
  <Icon {...props}>
    <Timer />
  </Icon>
);

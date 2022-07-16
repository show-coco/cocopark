import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Reset from "../../../assets/svg/Reset.svg";

type Props = IconProps;

export const ResetIcon: FC<Props> = (props) => <Icon as={Reset} {...props} />;

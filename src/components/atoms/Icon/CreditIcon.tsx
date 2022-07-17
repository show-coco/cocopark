import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Credit from "../../../assets/svg/Credit.svg";

type Props = IconProps;

export const CreditIcon: FC<Props> = (props) => <Icon as={Credit} {...props} />;

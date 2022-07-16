import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Public from "../../../assets/svg/Public.svg";

type Props = IconProps;

export const PublicIcon: FC<Props> = (props) => <Icon as={Public} {...props} />;

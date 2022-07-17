import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import People from "../../../assets/svg/People.svg";

type Props = IconProps;

export const PeopleIcon: FC<Props> = (props) => <Icon as={People} {...props} />;

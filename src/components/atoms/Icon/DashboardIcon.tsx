import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Dashboard from "../../../assets/svg/Dashboard.svg";

type Props = IconProps;

export const DashboardIcon: FC<Props> = (props) => (
  <Icon as={Dashboard} {...props} />
);

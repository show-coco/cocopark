import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { TbArrowsSort } from "react-icons/tb";

type Props = IconProps;

export const ArrowsSortIcon: FC<Props> = (props) => (
  <Icon as={TbArrowsSort} {...props} />
);

import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

type Props = IconProps;

export const DotsIcon: FC<Props> = (props) => (
  <Icon as={BiDotsHorizontalRounded} {...props} />
);

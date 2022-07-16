import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

type Props = IconProps;

export const HeartIcon: FC<Props> = (props) => (
  <Icon as={AiOutlineHeart} {...props} />
);

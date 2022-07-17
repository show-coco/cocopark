import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Bookmark from "../../../assets/svg/Bookmark.svg";

type Props = IconProps;

export const BookmarkIcon: FC<Props> = (props) => (
  <Icon as={Bookmark} {...props} />
);

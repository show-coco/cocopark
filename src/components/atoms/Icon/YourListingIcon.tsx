import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import YourListing from "../../../assets/svg/YourListing.svg";

type Props = IconProps;

export const YourListingIcon: FC<Props> = (props) => (
  <Icon as={YourListing} {...props} />
);

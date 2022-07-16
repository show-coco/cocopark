import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import Discord from "../../../assets/svg/Discord.svg";

type Props = IconProps;

export const DiscordIcon: FC<Props> = (props) => (
  <Icon as={Discord} {...props} />
);

import { HStack, StackProps } from "@chakra-ui/react";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { DiscordIcon } from "components/atoms/Icon/DiscordIcon";
import { FacebookIcon } from "components/atoms/Icon/FacebookIcon";
import { PublicIcon } from "components/atoms/Icon/PublicIcon";
import { TwitterIcon } from "components/atoms/Icon/TwitterIcon";
import { FC } from "react";

type Props = StackProps;

export const SNSLinks: FC<Props> = ({ ...props }) => {
  return (
    <HStack {...props}>
      <FilledRestingIconButton
        aria-label="twitter"
        size="lg"
        icon={<TwitterIcon />}
      />
      <FilledRestingIconButton
        aria-label="discord"
        size="lg"
        icon={<DiscordIcon />}
      />
      <FilledRestingIconButton
        aria-label="facebook"
        size="lg"
        icon={<FacebookIcon />}
      />
      <FilledRestingIconButton
        aria-label="public"
        size="lg"
        icon={<PublicIcon />}
      />
    </HStack>
  );
};

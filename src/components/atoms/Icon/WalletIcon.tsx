import { Icon, IconProps } from "@chakra-ui/react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FC } from "react";

type Props = IconProps;

export const WalletIcon: FC<Props> = (props) => (
  <Icon as={MdAccountBalanceWallet} {...props} />
);

import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { useCopyButton } from "hooks/useCopyButton";
import { FC } from "react";

type Props = Omit<IconButtonProps, "icon" | "aria-label"> & {
  address: string;
};

export const CopyIconButton: FC<Props> = (props) => {
  const { isCopied, onClick } = useCopyButton(props.address);

  return isCopied ? (
    <IconButton
      aria-label="address copied"
      variant="ghost"
      rounded="full"
      size="sm"
      icon={<CheckIcon />}
    />
  ) : (
    <IconButton
      aria-label="copy address"
      variant="ghost"
      rounded="full"
      size="sm"
      icon={<CopyIcon />}
      onClick={onClick}
      {...props}
    />
  );
};

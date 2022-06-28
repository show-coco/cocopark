import { forwardRef, IconButton, IconButtonProps } from "@chakra-ui/react";

export const FilledIconButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => {
    return (
      <IconButton
        bgColor="purple.primary"
        rounded="full"
        ref={ref}
        {...props}
      />
    );
  }
);

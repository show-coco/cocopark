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

export const FilledRestingIconButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => {
    return <IconButton rounded="full" variant="outline" ref={ref} {...props} />;
  }
);

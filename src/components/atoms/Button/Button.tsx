import {
  Button as ChakraButton,
  ButtonProps,
  forwardRef,
} from "@chakra-ui/react";

export const FilledButton = forwardRef<ButtonProps, "button">((props, ref) => {
  return (
    <ChakraButton
      bgColor="purple.primary"
      color="white"
      colorScheme="purple"
      rounded="full"
      px="30px"
      _hover={{ bgColor: "purple.primary.hover" }}
      ref={ref}
      {...props}
    >
      {props.children}
    </ChakraButton>
  );
});

export const FilledRestingButton = forwardRef<ButtonProps, "button">(
  (props, ref) => {
    return (
      <ChakraButton
        bgColor="purple.resting"
        color="purple.primary"
        rounded="full"
        px="30px"
        _hover={{ bgColor: "purple.resting.hover" }}
        _active={{ bgColor: "purple.resting.active" }}
        ref={ref}
        {...props}
      >
        {props.children}
      </ChakraButton>
    );
  }
);

export const OutlineRestingButton = forwardRef<ButtonProps, "button">(
  (props, ref) => {
    return (
      <ChakraButton
        bgColor="white"
        color="black.primary"
        border="1px solid"
        borderColor="outline.light"
        rounded="full"
        px="30px"
        _hover={{ bgColor: "#edf2f6" }}
        _active={{ color: "purple.primary" }}
        ref={ref}
        {...props}
      >
        {props.children}
      </ChakraButton>
    );
  }
);

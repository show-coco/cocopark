import { forwardRef, Tab as ChakraTab, TabProps } from "@chakra-ui/react";

type Props = TabProps;

export const Tab = forwardRef<Props, "div">((props, ref) => {
  return (
    <ChakraTab
      border="1px solid"
      borderColor="outline.light"
      boxSizing="border-box"
      _selected={{
        bgColor: "purple.resting",
        color: "purple.primary",
        border: "none",
      }}
      {...props}
      ref={ref}
    >
      {props.children}
    </ChakraTab>
  );
});

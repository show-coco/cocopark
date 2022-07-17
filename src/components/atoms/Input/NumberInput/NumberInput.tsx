import {
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export const NumberInput: FC<FlexProps> = ({ ...props }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex
      justify="space-between"
      rounded="full"
      border="1px"
      borderColor="outline.light"
      px="20px"
      h="48px"
      alignItems="center"
      {...props}
    >
      <Text w="full" textStyle="text.14.bold">
        Amount
      </Text>
      <HStack>
        <IconButton
          aria-label="increment"
          variant="outline"
          size="xs"
          rounded="full"
          icon={<BiMinus />}
          {...dec}
        />
        <Input
          textAlign="center"
          rounded="full"
          variant="unstyled"
          value={3}
          {...input}
        />
        <IconButton
          aria-label="increment"
          variant="outline"
          size="xs"
          rounded="full"
          icon={<BiPlus />}
          {...inc}
        />
      </HStack>
    </Flex>
  );
};

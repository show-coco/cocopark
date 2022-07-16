import { Box, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";

export const PropertyItem: FC = () => {
  return (
    <Box
      p="8px"
      border="1px"
      borderColor="gray.100"
      rounded="md"
      cursor="pointer"
      _hover={{ bgColor: "soft.light" }}
    >
      <HStack justify="space-between" mb="12px">
        <Text>Nightfall</Text>
        <Flex alignItems="center">
          <Text textStyle="text.16.bold">6</Text>
          <Text textStyle="text.14.regular" color="gray.primary">
            /9999
          </Text>
        </Flex>
      </HStack>
      <HStack justify="space-between">
        <Text>2.99</Text>
        <Tag colorScheme="purple" size="sm">
          4.39%
        </Tag>
      </HStack>
    </Box>
  );
};

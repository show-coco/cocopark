import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

export const AnalyticsCounterCard: FC = () => {
  return (
    <Box
      textAlign="center"
      py="14px"
      border="1px"
      borderColor="outline.light"
      w="193px"
      rounded="md"
    >
      <Text color="gray.primary" textStyle="text.12.medium">
        Floor Price
      </Text>
      <Text textStyle="h6">478.5k USD</Text>
      <Text textStyle="text.12.bold" color="purple.primary">
        +3.06%
      </Text>
    </Box>
  );
};

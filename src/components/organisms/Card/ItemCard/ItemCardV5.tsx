import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

export const ItemCardV5: FC = () => {
  return (
    <Box minW="302px" w="302px" rounded="10px" textAlign="center">
      <Image
        src="/Art3.png"
        h="302px"
        w="302px"
        objectFit="cover"
        roundedTop="10px"
      />
      <Box
        mt="-28px"
        border="1px solid"
        borderTop="none"
        borderColor="outline.light"
        px="20px"
        pb="31px"
        rounded="10px"
      >
        <Avatar src="/Art6.png" mb="12px" />
        <Text textStyle="h6">Election Season</Text>
        <Flex justify="center" alignItems="center">
          <Text textStyle="text.14.regular" color="gray.primary" mr="6px">
            by
          </Text>
          <Text textStyle="text.14.bold" color="purple.primary">
            Benito Noboa
          </Text>
        </Flex>

        <Text mt="16px" textStyle="text.14.regular">
          Definiteness of purpose is the starting point of all achievemen
        </Text>
      </Box>
    </Box>
  );
};

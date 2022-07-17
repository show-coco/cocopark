import { Avatar, Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import ETHIcon from "../../../../assets/svg/ETH.svg";

export const ItemCardV4: FC = () => {
  return (
    <Box minW="302px" w="302px" rounded="10px">
      <Image
        src="/Art3.png"
        h="302px"
        w="302px"
        alt="thumbnail"
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

        <HStack mt="16px" spacing="6px" justify="center">
          <Icon h="22px" w="22px">
            <ETHIcon />
          </Icon>
          <Text textStyle="text.14.bold">0.45 ETH</Text>
        </HStack>
      </Box>
    </Box>
  );
};

import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { MdAutoGraph, MdOutlineCallMade } from "react-icons/md";

export const AnalyticsCounterCardV1: FC = () => {
  return (
    <HStack
      p="20px"
      w="325px"
      justify="space-between"
      border="1px"
      borderColor="outline.light"
      rounded="md"
    >
      <HStack>
        <Flex
          h="46px"
          w="46px"
          bgColor="soft.light"
          rounded="full"
          justify="center"
          alignItems="center"
        >
          <Icon as={MdAutoGraph} />
        </Flex>

        <Flex flexDir="column">
          <Text textStyle="button.16">316.94k</Text>
          <Text textStyle="text.14.regular" color="gray">
            Impressions
          </Text>
        </Flex>
      </HStack>

      <Flex alignItems="center" gap="8px">
        <Text textStyle="text.12.bold">+10%</Text>
        <Icon as={MdOutlineCallMade} color="yellow.primary" />
      </Flex>
    </HStack>
  );
};

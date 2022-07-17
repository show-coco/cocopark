import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const DateCount: FC = () => {
  return (
    <Flex align="center">
      <Text textStyle="h6">3</Text>
      <Text textStyle="text.16.regular" mr="4px">
        d
      </Text>
      <Text textStyle="h6">: 10</Text>
      <Text textStyle="text.16.regular" mr="4px">
        h
      </Text>
      <Text textStyle="h6">: 40</Text>
      <Text textStyle="text.16.regular" mr="4px">
        m
      </Text>
      <Text textStyle="h6">: 37</Text>
      <Text textStyle="text.16.regular" mr="4px">
        s
      </Text>
    </Flex>
  );
};

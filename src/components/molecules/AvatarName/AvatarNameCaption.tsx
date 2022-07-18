import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const AvatarNameCaption: FC = () => {
  return (
    <HStack spacing="18px">
      <Avatar rounded="md" src="/Art1.png" bgColor="white" />
      <Flex flexDir="column">
        <Text textStyle="button.16">Bored Ape Yacht Club</Text>
        <Text color="gray.primary" textStyle="button.14.regular">
          Art
        </Text>
      </Flex>
    </HStack>
  );
};

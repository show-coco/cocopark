import { HStack, Text, IconButton, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { MdAddCircle } from "react-icons/md";

export const CreateCollectionItem: FC = () => {
  return (
    <HStack
      h="106px"
      w="full"
      justify="space-between"
      rounded="md"
      border="1px dashed"
      borderColor="outline.light"
      p="12px"
      transition="all 0.2s"
      _hover={{ bgColor: "gray.50" }}
      cursor="pointer"
    >
      <HStack spacing="18px">
        <IconButton
          aria-label="create-collection"
          h="82px"
          w="82px"
          rounded="md"
          icon={
            <Icon as={MdAddCircle} h="24px" w="24px" color="gray.primary" />
          }
        />
        <Text textStyle="h6">Create new collection</Text>
      </HStack>
    </HStack>
  );
};

import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import { OutlineRestingButton } from "components/atoms/Button/Button";
import Link from "next/link";
import { FC } from "react";

export const SelectCollectionItem: FC = () => {
  return (
    <Link href="/assets/new?step=publish">
      <HStack
        h="106px"
        w="full"
        justify="space-between"
        rounded="md"
        border="1px"
        borderColor="outline.light"
        p="12px"
        transition="all 0.2s"
        _hover={{ bgColor: "gray.50" }}
        cursor="pointer"
      >
        <HStack spacing="18px">
          <Image src="/Art1.png" h="82px" w="82px" rounded="md" />
          <VStack alignItems="flex-start">
            <Text textStyle="h6">Battle for Digital</Text>
            <Text textStyle="text.14.regular" color="gray.primary">
              56 items
            </Text>
          </VStack>
        </HStack>

        <Link href="/assets/new?step=publish">
          <OutlineRestingButton>Select</OutlineRestingButton>
        </Link>
      </HStack>
    </Link>
  );
};

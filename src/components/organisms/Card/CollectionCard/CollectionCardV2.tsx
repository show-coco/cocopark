import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

export const CollectionCardV2: FC = () => {
  return (
    <Box rounded="14px" w="410px" bgColor="white" boxShadow="md" p="24px">
      <HStack h="208px" w="362px" spacing="12px">
        <Image
          src="/Art3.png"
          w="241px"
          h="208px"
          rounded="12px"
          objectFit="cover"
        />
        <VStack spacing="12px">
          <Image src="/Art4.png" w="109px" h="98px" rounded="12px" />
          <Image src="/Art5.png" w="109px" h="98px" rounded="12px" />
        </VStack>
      </HStack>

      <HStack mt="22px">
        <Avatar src="/Art6.png" mr="8px" />
        <Box>
          <Text textStyle="h6">Ahmad Nazeri</Text>
          <HStack>
            <Text textStyle="text.14.bold">64</Text>
            <Text textStyle="text.14.regular">items</Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

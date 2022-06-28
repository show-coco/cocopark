import { Box, Heading, HStack } from "@chakra-ui/react";
import { CollectionCardV2 } from "components/organisms/Card/CollectionCard/CollectionCardV2";
import { FC } from "react";

export const Section5: FC = () => {
  return (
    <Box px="80px" textAlign="center" mx="auto" bgColor="soft.light" py="60px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Recommended collections
      </Heading>

      <HStack spacing="24px">
        <CollectionCardV2 />
        <CollectionCardV2 />
        <CollectionCardV2 />
      </HStack>
    </Box>
  );
};

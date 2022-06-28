import { Box, Heading, HStack, useMediaQuery } from "@chakra-ui/react";
import { CollectionCardV2 } from "components/organisms/Card/CollectionCard/CollectionCardV2";
import { mobileMediaQuery } from "config/chakra-ui";
import { FC } from "react";

export const Section5: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <Box px="80px" textAlign="center" mx="auto" bgColor="soft.light" py="60px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Recommended collections
      </Heading>

      <HStack spacing="24px" overflowY="scroll">
        <CollectionCardV2 />
        <CollectionCardV2 />
        <CollectionCardV2 />
      </HStack>
    </Box>
  );
};

const Mobile: FC = () => {
  return (
    <Box px="30px" textAlign="center" bgColor="soft.light" py="60px">
      <Heading as="h3" textStyle="h3" mb="42px">
        Recommended collections
      </Heading>

      <HStack spacing="24px" overflowY="scroll">
        <CollectionCardV2 />
        <CollectionCardV2 />
        <CollectionCardV2 />
      </HStack>
    </Box>
  );
};

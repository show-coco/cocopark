import { Box, Button, Flex, useToast, VStack } from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { ItemCardV1 } from "components/organisms/Card/ItemCard/ItemCardV1";
import { ItemCardV4 } from "components/organisms/Card/ItemCard/ItemCardV4";
import { ItemCardV5 } from "components/organisms/Card/ItemCard/ItemCardV5";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { AssetNewTemplate } from "components/templates/AssetNewTemplate/AssetNewTemplate";
import { useRouter } from "next/router";
import { FC } from "react";

export const AssetNewPublishScreen: FC = () => {
  const router = useRouter();
  const toast = useToast();

  const onPublish = () => {
    router.push("/assets/hello/1");
    toast({
      status: "success",
      title: "Item created",
      position: "top-right",
      isClosable: true,
    });
  };

  return (
    <AssetNewTemplate
      title="Ready to publish?"
      description="They all serve the same purpose, but each one takes a different approach and makes different tradeoffs."
    >
      <VStack w="fit-content" mx="auto" spacing="45px">
        <ItemCardV6 />

        <FilledButton w="full" onClick={onPublish}>
          Publish
        </FilledButton>
      </VStack>
    </AssetNewTemplate>
  );
};

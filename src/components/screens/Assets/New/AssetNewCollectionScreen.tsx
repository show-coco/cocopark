import { VStack } from "@chakra-ui/react";
import { CreateCollectionItem } from "components/organisms/Item/SelectCollectionItem/CreateCollectionItem";
import { SelectCollectionItem } from "components/organisms/Item/SelectCollectionItem/SelectCollectionItem";
import { AssetNewTemplate } from "components/templates/AssetNewTemplate/AssetNewTemplate";
import { FC } from "react";

export const AssetNewCollectionScreen: FC = () => {
  return (
    <AssetNewTemplate
      title="Choose collection"
      description="They all serve the same purpose, but each one takes a different approach and makes different tradeoffs."
    >
      <VStack spacing="12px">
        <CreateCollectionItem />
        <SelectCollectionItem />
      </VStack>
    </AssetNewTemplate>
  );
};

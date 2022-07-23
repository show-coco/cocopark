import { FileSelector } from "components/organisms/FileSelector/FileSelector";
import { AssetNewTemplate } from "components/templates/AssetNewTemplate/AssetNewTemplate";
import { NextBackButtonGroup } from "components/templates/AssetNewTemplate/parts/NextBackButtonGroup";
import { FC } from "react";

export const AssetNewSelectAssetScreen: FC = () => {
  return (
    <AssetNewTemplate
      title="Upload an item"
      description="They all serve the same purpose, but each one takes a different approach and makes different tradeoffs."
    >
      <FileSelector onChange={() => console.log("hello")} accept="image/*" />

      <NextBackButtonGroup
        backHref="/assets/new?step=wallet"
        nextHref="/assets/new?step=detail"
      />
    </AssetNewTemplate>
  );
};

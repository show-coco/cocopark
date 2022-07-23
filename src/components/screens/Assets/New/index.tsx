import { useRouter } from "next/router";
import { FC } from "react";
import { AssetNewChooseWalletScreen } from "./AssetNewChooseWalletScreen";
import { AssetNewCollectionScreen } from "./AssetNewCollectionScreen";
import { AssetNewDetailScreen } from "./AssetNewDetailScreen";
import { AssetNewPublishScreen } from "./AssetNewPublishScreen";
import { AssetNewSelectAssetScreen } from "./AssetNewSelectAssetScreen";

export const AssetNewScreen: FC = () => {
  const router = useRouter();
  const step = router.query.step as string;

  switch (step) {
    case "wallet":
      return <AssetNewChooseWalletScreen />;
    case "asset":
      return <AssetNewSelectAssetScreen />;
    case "detail":
      return <AssetNewDetailScreen />;
    case "collection":
      return <AssetNewCollectionScreen />;
    case "publish":
      return <AssetNewPublishScreen />;
    default:
      return <AssetNewChooseWalletScreen />;
  }
};

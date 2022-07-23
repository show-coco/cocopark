import { Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";

export const FavoritesScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Favorites</Heading>
      <NoContents
        title="Favorite items not found"
        description="Let's find your favorite NFTs"
      />
    </SidebarTemplate>
  );
};

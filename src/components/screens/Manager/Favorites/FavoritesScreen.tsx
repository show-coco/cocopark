import { Box, Heading } from "@chakra-ui/react";
import { Pagination } from "components/molecules/Pagination/Pagination";
import { FavoriteTable } from "components/organisms/Table/FavariteTable/FavoriteTable";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";

export const FavoritesScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Favorites</Heading>
      {/* <NoContents
        title="Favorite items not found"
        description="Let's find your favorite NFTs"
      /> */}
      <Box mt="24px">
        <FavoriteTable />
        <Box mt="40px">
          <Pagination />
        </Box>
      </Box>
    </SidebarTemplate>
  );
};

import { Box, Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";
import HumanAndDesc from "../../../../assets/svg/HumanAndDesk.svg";
import { ListingsTable } from "components/organisms/Table/ListingsTable/ListingsTable";
import { Pagination } from "components/molecules/Pagination/Pagination";

export const YourListingsScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Your listings</Heading>
      {/* <NoContents
        title="Favorite items not found"
        description="Let's find your favorite NFTs"
        icon={<HumanAndDesc />}
      /> */}

      <Box mt="32px" mb="40px">
        <ListingsTable />
      </Box>

      <Pagination />
    </SidebarTemplate>
  );
};

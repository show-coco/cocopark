import { Box, Heading } from "@chakra-ui/react";
import { Pagination } from "components/molecules/Pagination/Pagination";
import { PayoutsTable } from "components/organisms/Table/PayoutsTable/PayoutsTable";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";

export const PayoutsScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Payouts</Heading>

      {/* <NoContents
        title="No processed payouts"
        description="Let's buy something NFT!"
      /> */}
      <Box mt="28px" mb="40px">
        <PayoutsTable />
      </Box>

      <Pagination />
    </SidebarTemplate>
  );
};

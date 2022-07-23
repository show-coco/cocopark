import { Box, Heading, Text } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";

export const PayoutsScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Payouts</Heading>

      <NoContents
        title="No processed payouts"
        description="Let's buy something NFT!"
      />
    </SidebarTemplate>
  );
};

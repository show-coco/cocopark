import { Box, Heading, HStack } from "@chakra-ui/react";
import { AnalyticsCounterCardV1 } from "components/organisms/Card/AnalyticsCounterCard/AnalyticsCounterCardV1";
import { SalesHistory } from "components/organisms/Chart/SalesHistory/SalesHistory";
import { CollectionsTable } from "components/organisms/Table/CollectionsTable/CollectionsTable";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";

export const DashboardScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Dashboard</Heading>
      <HStack mt="30px" mb="24px">
        <AnalyticsCounterCardV1 />
        <AnalyticsCounterCardV1 />
        <AnalyticsCounterCardV1 />
      </HStack>

      <SalesHistory />

      <Box mt="24px">
        <CollectionsTable />
      </Box>
    </SidebarTemplate>
  );
};

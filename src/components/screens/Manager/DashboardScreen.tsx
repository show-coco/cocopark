import { Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";

export const DashboardScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Dashboard</Heading>
    </SidebarTemplate>
  );
};

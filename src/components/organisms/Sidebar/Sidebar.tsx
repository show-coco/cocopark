import { FC } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { BookmarkIcon } from "components/atoms/Icon/BookmarkIcon";
import { CreditIcon } from "components/atoms/Icon/CreditIcon";
import { DashboardIcon } from "components/atoms/Icon/DashboardIcon";
import { PeopleIcon } from "components/atoms/Icon/PeopleIcon";
import { YourListingIcon } from "components/atoms/Icon/YourListingIcon";
import { SidebarNavLink } from "components/atoms/Link/NavLink";
import {
  MdAccountCircle,
  MdDevices,
  MdHeadphones,
  MdNotifications,
  MdQrCode,
} from "react-icons/md";

export const Sidebar: FC = () => {
  return (
    <Box pt="44px" w="260px">
      <Text textStyle="text.14.light" px="32px" mb="12px">
        Manage listings
      </Text>
      <VStack w="full">
        <SidebarNavLink href="" isActive={true} icon={DashboardIcon}>
          Dashboard
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={YourListingIcon}>
          Your Listings
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={BookmarkIcon}>
          Favorites
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={PeopleIcon}>
          Following
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={CreditIcon}>
          Payouts
        </SidebarNavLink>
      </VStack>

      <Text textStyle="text.14.light" px="32px" mb="12px" mt="18px">
        Profile settings
      </Text>
      <VStack w="full">
        <SidebarNavLink href="" isActive={false} icon={MdAccountCircle}>
          Account Details
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdDevices}>
          Security
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdQrCode}>
          Apps
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdNotifications}>
          Notifications
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdHeadphones}>
          Help Center
        </SidebarNavLink>
      </VStack>
    </Box>
  );
};

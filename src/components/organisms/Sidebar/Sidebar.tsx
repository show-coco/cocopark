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
import { useRouter } from "next/router";

export const Sidebar: FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Box pt="44px" w="260px">
      <Text textStyle="text.14.light" px="32px" mb="12px">
        Manage listings
      </Text>
      <VStack w="full">
        <SidebarNavLink
          href="/manager/dashboard"
          isActive={pathname.includes("dashboard")}
          icon={DashboardIcon}
        >
          Dashboard
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/your-listings"
          isActive={pathname.includes("your-listings")}
          icon={YourListingIcon}
        >
          Your Listings
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/favorites"
          isActive={pathname.includes("favorites")}
          icon={BookmarkIcon}
        >
          Favorites
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/following"
          isActive={pathname.includes("following")}
          icon={PeopleIcon}
        >
          Following
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/payouts"
          isActive={pathname.includes("payouts")}
          icon={CreditIcon}
        >
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

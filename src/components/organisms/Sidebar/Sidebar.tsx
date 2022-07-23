import { FC } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CreditIcon } from "components/atoms/Icon/CreditIcon";
import { DashboardIcon } from "components/atoms/Icon/DashboardIcon";
import { SidebarNavLink } from "components/atoms/Link/NavLink";
import {
  MdDevices,
  MdOutlineAccountCircle,
  MdOutlineBookmarkBorder,
  MdOutlineHeadphones,
  MdOutlineInbox,
  MdOutlineNotifications,
  MdOutlinePeople,
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
          icon={MdOutlineInbox}
        >
          Your Listings
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/favorites"
          isActive={pathname.includes("favorites")}
          icon={MdOutlineBookmarkBorder}
        >
          Favorites
        </SidebarNavLink>
        <SidebarNavLink
          href="/manager/following"
          isActive={pathname.includes("following")}
          icon={MdOutlinePeople}
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
        <SidebarNavLink href="" isActive={false} icon={MdOutlineAccountCircle}>
          Account Details
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdDevices}>
          Security
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdQrCode}>
          Apps
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdOutlineNotifications}>
          Notifications
        </SidebarNavLink>
        <SidebarNavLink href="" isActive={false} icon={MdOutlineHeadphones}>
          Help Center
        </SidebarNavLink>
      </VStack>
    </Box>
  );
};

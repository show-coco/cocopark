import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { NavLink } from "components/atoms/Link/NavLink";
import { Logo } from "components/atoms/Logo/Logo";
import { FC } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { LogoHoriziontal } from "components/atoms/Logo/LogoHoriziontal";
import { MenuNavLink } from "components/atoms/Link/MenuNavLink";
import { AiOutlineSearch } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsDroplet } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";

export const GuestHeader: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <Flex
      as="header"
      h="84px"
      alignItems="center"
      px="32px"
      justify="space-between"
    >
      <Logo w="40px" h="40px" />

      <Flex>
        <HStack spacing="29px">
          <NavLink href="/">Explore</NavLink>
          <NavLink href="/">Stats</NavLink>
          <NavLink href="/">Drops</NavLink>
          <NavLink href="/">Activity</NavLink>
        </HStack>
        <FilledButton ml="32px">Sign In</FilledButton>
      </Flex>
    </Flex>
  );
};

const MobileHeader: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex h="84px" boxShadow="md" bgColor="white" alignItems="center" px="23px">
      <IconButton
        variant="ghost"
        aria-label="menu"
        mr="11px"
        onClick={onOpen}
        icon={<Icon as={AiOutlineMenu} />}
      />

      <LogoHoriziontal />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            Menu
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <MenuNavLink href="/" icon={AiOutlineSearch}>
              Explore
            </MenuNavLink>
            <MenuNavLink href="/" icon={IoAnalyticsOutline}>
              Stats
            </MenuNavLink>
            <MenuNavLink href="/" icon={BsDroplet}>
              Drops
            </MenuNavLink>
            <MenuNavLink href="/" icon={FiActivity}>
              Activity
            </MenuNavLink>

            <FilledButton mt="22px" w="full">
              Sign In
            </FilledButton>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

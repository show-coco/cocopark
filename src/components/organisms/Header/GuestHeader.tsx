import {
  Avatar,
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
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
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
import { Links } from "./parts/Links";
import { SearchIcon } from "@chakra-ui/icons";
import { useWeb3React } from "@web3-react/core";
import { FilledRestingIconButton } from "components/atoms/Button/IconButton";
import { WalletIcon } from "components/atoms/Icon/WalletIcon";
import { WalletDrawer } from "../Drawer/WalletDrawer";
import { WalletModal } from "../Modal/WalletModel/WalletModal";
import { useEagerConnect } from "hooks/useEagerConnect";
import { useInactiveListener } from "hooks/useInactiveListener";
import { SearchInput } from "components/atoms/Input/SearchInput";
import Link from "next/link";

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
        <Links />
        <FilledButton ml="32px">Sign In</FilledButton>
      </Flex>
    </Flex>
  );
};

export const HeaderWithSearch: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { active, account } = useWeb3React();
  const walletDrawer = useDisclosure();
  const walletModal = useDisclosure();

  const tried = useEagerConnect();
  useInactiveListener(!tried);

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <>
      {account && <WalletDrawer account={account} {...walletDrawer} />}
      <WalletModal {...walletModal} />

      <Flex
        as="header"
        h="84px"
        alignItems="center"
        px="32px"
        justify="space-between"
        bgColor="white"
        boxShadow="md"
      >
        <Flex flex="1 0 0" pr="60px">
          <Link href="/">
            <Logo w="40px" h="40px" mr="12px" cursor="pointer" />
          </Link>
          <SearchInput placeholder="Search items, collections, and accounts" />
        </Flex>

        <Flex>
          <Links />
          {active ? (
            <HStack ml="32px" spacing="8px">
              <Link href="/assets/new">
                <FilledButton>Create</FilledButton>
              </Link>
              <Link href="/manager/dashboard">
                <a>
                  <Avatar
                    src="/Art1.png"
                    size="sm"
                    h="40px"
                    w="40px"
                    cursor="pointer"
                  />
                </a>
              </Link>
              <FilledRestingIconButton
                borderRadius="full"
                aria-label="wallet"
                ml="32px"
                icon={<WalletIcon w="18px" h="18px" />}
                onClick={walletDrawer.onOpen}
              />
            </HStack>
          ) : (
            <FilledButton ml="32px" onClick={walletModal.onOpen}>
              Connect Wallet
            </FilledButton>
          )}
        </Flex>
      </Flex>
    </>
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

export const SimpleHeader: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { active, account } = useWeb3React();
  const walletDrawer = useDisclosure();
  const walletModal = useDisclosure();

  const tried = useEagerConnect();
  useInactiveListener(!tried);

  return (
    <>
      {account && <WalletDrawer account={account} {...walletDrawer} />}
      <WalletModal {...walletModal} />

      <Flex
        as="header"
        h="84px"
        alignItems="center"
        px="32px"
        justify="space-between"
        bgColor="white"
      >
        <Flex flex="1 0 0" pr="60px">
          <Link href="/">
            <Logo w="40px" h="40px" mr="12px" cursor="pointer" />
          </Link>
        </Flex>

        {active ? (
          <HStack ml="32px" spacing="8px">
            <Link href="/explore">
              <FilledButton>Cancel</FilledButton>
            </Link>
            <Link href="/manager/dashboard">
              <a>
                <Avatar
                  src="/Art1.png"
                  size="sm"
                  h="40px"
                  w="40px"
                  cursor="pointer"
                />
              </a>
            </Link>
            <FilledRestingIconButton
              borderRadius="full"
              aria-label="wallet"
              ml="32px"
              icon={<WalletIcon w="18px" h="18px" />}
              onClick={walletDrawer.onOpen}
            />
          </HStack>
        ) : (
          <FilledButton ml="32px" onClick={walletModal.onOpen}>
            Connect Wallet
          </FilledButton>
        )}
      </Flex>
    </>
  );
};

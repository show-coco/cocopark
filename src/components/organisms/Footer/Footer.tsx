import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import { FC, ReactNode } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";
import FacebookIcon from "../../../assets/svg/FacebookColored.svg";
import TwitterIcon from "../../../assets/svg/TwitterColored.svg";
import GlobeIcon from "../../../assets/svg/Globe.svg";
import MoonIcon from "../../../assets/svg/Moon.svg";

export const Footer: FC = () => {
  return (
    <Box as="footer" bgColor="soft.light">
      <Flex px="80px" py="60px">
        <FirstColumn />
        <SecondColumn />
        <ThirdColumn />
        <FourthColumn />
      </Flex>
      <Divider borderColor="outline.light" />
      <Bottom />
    </Box>
  );
};

const FirstColumn: FC = () => {
  return (
    <Box mr="241px">
      <Box mb="56px">
        <Text mb="8px" textStyle="button.16">
          Subscribe to updates
        </Text>
        <InputGroup>
          <Input
            rounded="full"
            variant="outline"
            placeholder="Enter your e-mail"
            w="300px"
            h="48px"
          />
          <InputRightElement h="full">
            <Center>
              <Icon as={HiOutlineMail} />
            </Center>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Box>
        <Text mb="8px" textStyle="button.16">
          Follow us
        </Text>

        <HStack>
          <SNSIconLink
            href="https://twitter.com"
            icon={<Icon as={FacebookIcon} />}
          />
          <SNSIconLink
            href="https://twitter.com"
            icon={<Icon fill="#7289da" as={SiDiscord} />}
          />
          <SNSIconLink
            href="https://twitter.com"
            icon={<Icon as={TwitterIcon} />}
          />
        </HStack>
      </Box>
    </Box>
  );
};

const SecondColumn: FC = () => {
  return (
    <Box mr="95px">
      <Text mb="24px" textStyle="button.16">
        Marketplace
      </Text>

      <VStack spacing="16px" alignItems="flex-start">
        <FooterLink href="#">Explore</FooterLink>
        <FooterLink href="#">Help Center</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Platform Status</FooterLink>
      </VStack>
    </Box>
  );
};

const ThirdColumn: FC = () => {
  return (
    <Box mr="116px">
      <Text mb="24px" textStyle="button.16">
        Community
      </Text>

      <VStack spacing="16px" alignItems="flex-start">
        <FooterLink href="#">Profile</FooterLink>
        <FooterLink href="#">Favorite</FooterLink>
        <FooterLink href="#">Watchlist</FooterLink>
        <FooterLink href="#">My Collections</FooterLink>
        <FooterLink href="#">Rankings</FooterLink>
        <FooterLink href="#">Activity</FooterLink>
      </VStack>
    </Box>
  );
};

const FourthColumn: FC = () => {
  return (
    <Box>
      <Text mb="24px" textStyle="button.16">
        Region
      </Text>

      <Text textStyle="text.14.regular" color="gray.primary" mb="25px">
        The world’s first marketplace for collectibles and non-fungible tokens
        NFTs where anything is possible and all are welcome
      </Text>

      <Select
        variant="outline"
        rounded="full"
        w="158px"
        fontSize="14px"
        fontWeight="bold"
      >
        <option>Currency - USD</option>
      </Select>
    </Box>
  );
};

const Bottom: FC = () => {
  return (
    <Flex px="32px" alignItems="center" justify="space-between" py="18px">
      <HStack spacing="22px">
        <Text textStyle="text.12.bold">Privacy Policy</Text>
        <Text textStyle="text.12.bold">License</Text>
        <Text textStyle="text.12.bold">API</Text>
        <Text textStyle="text.12.medium" color="gray.primary">
          © 2021 All rights reserved
        </Text>
      </HStack>

      <Flex alignItems="center">
        <Flex alignItems="center" mr="18px">
          <Text textStyle="text.14.bold" mr="6px">
            English
          </Text>
          <Icon as={GlobeIcon} />
        </Flex>

        <IconButton
          aria-label="dark-light"
          variant="outline"
          rounded="full"
          icon={<Icon as={MoonIcon} />}
        />
      </Flex>
    </Flex>
  );
};

const FooterLink: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} color="gray.primary" textStyle="button.14">
      {children}
    </Link>
  );
};

const SNSIconLink: FC<{ icon: any; href: string }> = ({ icon, href }) => {
  return (
    <IconButton
      aria-label="facebook"
      variant="outline"
      rounded="full"
      size="lg"
      as="a"
      href={href}
      target="_blank"
      icon={icon}
    />
  );
};

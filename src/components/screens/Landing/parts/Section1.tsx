import { FC } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FilledIconButton } from "components/atoms/Button/IconButton";
import { GuestHeader } from "components/organisms/Header/GuestHeader";
import { mobileMediaQuery } from "config/chakra-ui";

export const Section1: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <Box
      bgImage="/Bitmap.png"
      minH="100vh"
      backgroundSize="cover"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1))"
      ></Box>

      <Box>
        <Avatar
          position="absolute"
          top="218px"
          left="-63px"
          w="159px"
          h="159px"
          src="/Art1.png"
        />
        <Avatar
          position="absolute"
          top="259px"
          left="142px"
          w="117px"
          h="117px"
          src="/Art2.png"
        />
        <Avatar
          position="absolute"
          top="416px"
          left="96px"
          w="95px"
          h="95px"
          src="/Art3.png"
        />
        <Avatar
          position="absolute"
          top="195px"
          right="142px"
          w="159px"
          h="159px"
          src="/Art4.png"
        />
        <Avatar
          position="absolute"
          top="259px"
          right="-63px"
          w="95px"
          h="95px"
          src="/Art5.png"
        />
        <Avatar
          position="absolute"
          top="387px"
          right="96px"
          w="116px"
          h="116px"
          src="/Art6.png"
        />
      </Box>

      <Box position="relative">
        <GuestHeader />

        <Box mx="auto" w="720px" mt="105px" textAlign="center">
          <Heading as="h1" fontSize="54px">
            Discover, collect, and sell extraordinary NFTs
          </Heading>
          <Text textStyle="text.16.regular" mt="16px">
            Our marketplace is the worlds first and largest NFT market <br />
            for independent creators worldwide
          </Text>

          <InputGroup h="84px" w="628px" mx="auto" mt="40px">
            <Input
              h="84px"
              rounded="full"
              bgColor="rgba(255,255,255,.7)"
              mixBlendMode="normal"
              boxShadow="sm"
              border="none"
              textStyle="button.16"
              placeholder="Search items, collections, and accounts"
              px="34px"
            />
            <InputRightElement
              display="flex"
              alignItems="center"
              h="100%"
              pr="32px"
            >
              <FilledIconButton
                aria-label="search"
                colorScheme="purple"
                size="lg"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

const Mobile: FC = () => {
  return (
    <Box
      bgImage="/Bitmap.png"
      minH="100vh"
      backgroundSize="cover"
      position="relative"
      overflow="hidden"
      mb="90px"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1))"
      ></Box>

      <Box position="relative">
        <GuestHeader />

        <Box mx="auto" px="30px" mt="105px" textAlign="center">
          <Heading as="h1" fontSize="48px">
            Discover, collect, and sell extraordinary NFTs
          </Heading>
          <Text textStyle="text.16.regular" mt="16px">
            Our marketplace is the worlds first <br /> and largest NFT market
            for <br /> independent creators worldwide
          </Text>

          <InputGroup h="84px" w="full" mx="auto" mt="40px">
            <Input
              h="84px"
              rounded="full"
              bgColor="rgba(255,255,255,.7)"
              mixBlendMode="normal"
              boxShadow="sm"
              border="none"
              textStyle="button.16"
              placeholder="Type to search"
              px="34px"
            />
            <InputRightElement
              display="flex"
              alignItems="center"
              h="100%"
              pr="32px"
            >
              <FilledIconButton
                aria-label="search"
                colorScheme="purple"
                size="lg"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { FilledTag, SoftTag } from "components/atoms/Tag/Tag";
import { ItemCardV1 } from "components/organisms/Card/ItemCard/ItemCardV1";
import { ItemCardV6 } from "components/organisms/Card/ItemCard/ItemCardV6";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import Link from "next/link";
import { FC } from "react";

export const DropHomeScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Box px="80px" my="70px">
        <Box
          backgroundImage="/Bg2.png"
          w="full"
          rounded="lg"
          mb="40px"
          __css={{ aspectRatio: "4/1" }}
        >
          <Flex
            justify="center"
            alignItems="center"
            flexDir="column"
            h="full"
            color="white"
          >
            <SoftTag mb="20px">Live Now</SoftTag>
            <Heading as="h1" textStyle="h1" mb="8px">
              Invisible Friends
            </Heading>
            <Text as="h3" textStyle="h5">
              Ends in: 18h 54m 29s
            </Text>

            <Link href="/drops/1">
              <FilledButton mt="53px">View Details</FilledButton>
            </Link>
          </Flex>
        </Box>

        <Box mb="46px">
          <Heading as="h3" mb="36px">
            Active drops
          </Heading>

          <Flex gap="24px" flexWrap="wrap">
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
          </Flex>
        </Box>

        <Box>
          <Heading as="h3" mb="36px">
            Upcoming drops
          </Heading>

          <Flex gap="24px" flexWrap="wrap">
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
            <ItemCardV1 href="/drops/1" />
          </Flex>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

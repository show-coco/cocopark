import { Box, Divider, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { OutlineRestingButton } from "components/atoms/Button/Button";
import { Price } from "components/molecules/Price/Price";
import { User } from "components/molecules/User/User";
import { FC } from "react";
import { FiClock } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { FavoriteButton } from "components/atoms/Button/FavoriteButton";

export const ItemCardV6: FC = () => {
  return (
    <Box position="relative" minW="302px" w="302px" cursor="pointer">
      <OutlineRestingButton
        px="20px"
        leftIcon={<Icon w="18px" h="18px" as={FiClock} />}
        position="absolute"
        left="12px"
        top="12px"
      >
        10:40:57
      </OutlineRestingButton>

      <FavoriteButton position="absolute" right="12px" top="12px" />

      <Link href="#">
        <Box rounded="10px">
          <Image
            src="/Art3.png"
            h="302px"
            w="302px"
            objectFit="cover"
            roundedTop="10px"
          />
          <Box
            border="1px solid"
            borderTop="none"
            borderColor="outline.light"
            px="20px"
            pb="31px"
            roundedBottom="10px"
          >
            <Text textStyle="h6" pt="15px" noOfLines={1} w="full">
              Election Season
            </Text>

            <HStack mt="15px" justify="space-between">
              <Text textStyle="text.12.medium" color="gray.primary">
                Price
              </Text>

              <Price />
            </HStack>

            <Divider my="13px" />

            <HStack justify="space-between">
              <Text textStyle="text.12.medium" color="gray.primary">
                Author
              </Text>

              <User />
            </HStack>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

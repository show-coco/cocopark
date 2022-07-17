import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { SoftTag } from "components/atoms/Tag/Tag";
import { AvatarName } from "components/molecules/AvatarName/AvatarName";
import { Price } from "components/molecules/Price/Price";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
};

export const ItemCardV1: FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <Box
        minW="302px"
        w="302px"
        rounded="10px"
        p="24px"
        border="1px"
        borderColor="outline.light"
        cursor="pointer"
      >
        <SoftTag mb="16px">Live Now</SoftTag>
        <Image
          src="/Art0.png"
          h="254px"
          w="254px"
          objectFit="cover"
          rounded="md"
          alt="thumbnail"
          __css={{ aspectRatio: "1/1" }}
        />
        <Box mt="15px">
          <Box mb="7px">
            <AvatarName href="/drops/1" icon="/Art1.png" name="Science Jobs" />
          </Box>

          <HStack>
            <Text>Price</Text>
            <Price />
          </HStack>
        </Box>
      </Box>
    </Link>
  );
};

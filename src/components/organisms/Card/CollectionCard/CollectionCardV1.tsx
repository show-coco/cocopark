import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
};

export const CollectionCardV1: FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <Box
        rounded="lg"
        border="1px solid"
        borderColor="outline.light"
        p="24px"
        w="302px"
        cursor="pointer"
      >
        <Box position="relative" h="260px">
          <Image
            h="254px"
            w="254px"
            objectFit="cover"
            src="/Bg.png"
            rounded="lg"
            position="absolute"
            top="0"
          />
          <Box
            w="240px"
            h="240px"
            top="20px"
            left="7px"
            position="absolute"
            border="1px solid"
            rounded="lg"
            borderColor="outline.light"
            zIndex={-1}
            boxShadow="md"
            bgColor="white"
          ></Box>
          <Box
            w="220px"
            h="220px"
            top="46px"
            left="17px"
            position="absolute"
            border="1px solid"
            rounded="lg"
            borderColor="outline.light"
            zIndex={-2}
            boxShadow="md"
          ></Box>
        </Box>

        <Box mt="18px">
          <Text textStyle="h6">Election Season</Text>
          <HStack>
            <Text textStyle="text.14.bold">10</Text>
            <Text>items</Text>
          </HStack>
        </Box>
      </Box>
    </Link>
  );
};

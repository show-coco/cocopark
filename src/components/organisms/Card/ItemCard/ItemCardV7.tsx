import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import ETHIcon from "../../../../assets/svg/ETH.svg";
import Link from "next/link";
import { SoftTag } from "components/atoms/Tag/Tag";

export const ItemCardV7 = () => {
  return (
    <Link href="/">
      <Box
        p="24px"
        pb="30px"
        border="1px solid"
        borderColor="outline.light"
        minW="302px"
        w="302px"
        h="472px"
        rounded="8px"
      >
        <Flex justify="space-between" mb="16px">
          <SoftTag>Live Now</SoftTag>

          <Flex alignItems="center">
            <IconButton
              aria-label="favorite"
              variant="ghost"
              size="sm"
              mr="2px"
              rounded="full"
              icon={<Icon w="18px" h="18px" as={AiOutlineHeart} />}
            />
            <Text textStyle="text.14.bold">66</Text>
          </Flex>
        </Flex>

        <Image src="/Art1.png" alt="thumbnail" rounded="10px" mb="16px" />

        <Box textAlign="left">
          <Text textStyle="h6" mb="7px">
            Election Season
          </Text>

          <HStack mb="14px" spacing="6px">
            <Icon h="22px" w="22px">
              <ETHIcon />
            </Icon>
            <Text color="gray.primary" textStyle="text.14.regular">
              from
            </Text>
            <Text textStyle="text.14.bold">0.45 ETH</Text>
          </HStack>

          <AvatarGroup max={3} size="sm">
            <Avatar src="/Art1.png" />
            <Avatar src="/Art2.png" />
            <Avatar src="/Art3.png" />
            <Avatar src="/Art4.png" />
          </AvatarGroup>
        </Box>
      </Box>
    </Link>
  );
};

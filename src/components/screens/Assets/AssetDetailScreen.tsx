import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { OutlineRestingButton } from "components/atoms/Button/Button";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { FC } from "react";
import ETHIcon from "../../../assets/svg/ETH.svg";
import { MdOutlineContentCopy } from "react-icons/md";
import { omitAddress } from "utils/address";
import { FavoriteButton } from "components/atoms/Button/FavoriteButton";
import { useEagerConnect } from "hooks/useEagerConnect";
import { useInactiveListener } from "hooks/useInactiveListener";
import { CopyIcon } from "@chakra-ui/icons";

export const AssetDetailScreen: FC = () => {
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <Box>
      <HeaderWithSearch />
      <Flex px="80px" py="40px">
        <Box>
          <Image src="/Art0.png" w="628px" h="628px" rounded="lg" />
          <ActionCard />
        </Box>

        <Box>
          <FavoriteButton />
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

const ActionCard: FC = () => {
  return (
    <Flex mt="12px" boxShadow="lg" p="20px 24px" rounded="lg">
      <Box flex="1 0 0">
        <Text textStyle="text.12.medium" color="gray.primary">
          Top bid
        </Text>

        <HStack mt="9px">
          <Box
            display="inline-flex"
            rounded="full"
            bgColor="soft.primary"
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <Icon h="16px" w="16px" as={ETHIcon} />
          </Box>

          <Text textStyle="h6">2.87 ETH</Text>
          <Text>($9.1k USD)</Text>
        </HStack>

        <OutlineRestingButton
          w="284px"
          mt="22px"
          py="12px"
          alignItems="center"
          leftIcon={<CopyIcon />}
        >
          {omitAddress("0x162E71fdD2dvrnauornainvr0eB3a9Ec")}
        </OutlineRestingButton>
      </Box>

      <Box flex="1 0 0">
        <Text textStyle="text.12.medium" color="gray.primary">
          Sale ends in
        </Text>
      </Box>
    </Flex>
  );
};

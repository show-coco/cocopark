import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import {
  FilledButton,
  FilledRestingButton,
} from "components/atoms/Button/Button";
import { DateCount } from "components/atoms/Count/DateCount/DateCount";
import { ETHIcon } from "components/atoms/Icon/ETHIcon";
import { TimerIcon } from "components/atoms/Icon/Timer";
import { NumberInput } from "components/atoms/Input/NumberInput/NumberInput";
import { FC } from "react";

export const BuyActionCard: FC = () => {
  return (
    <Flex mt="12px" boxShadow="lg" p="20px 24px" rounded="lg">
      <Box mr="12px">
        <Box h="70px">
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
              <ETHIcon />
            </Box>

            <Text textStyle="h6">2.87 ETH ($9.1k USD)</Text>
          </HStack>
        </Box>

        <FilledButton w="284px" mt="27px" py="12px">
          Place your bid
        </FilledButton>
      </Box>

      <Box flex="1 0 0">
        <Box h="70px">
          <Text textStyle="text.12.medium" color="gray.primary">
            Sale ends in
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
              <TimerIcon h="20px" w="20px" />
            </Box>

            <DateCount />
          </HStack>
        </Box>

        <FilledRestingButton w="284px" mt="27px">
          Buy now
        </FilledRestingButton>
      </Box>
    </Flex>
  );
};

export const DropActionCard: FC = () => {
  return (
    <Flex mt="12px" boxShadow="lg" p="20px 24px" rounded="lg">
      <Box mr="12px">
        <Box h="70px">
          <Text textStyle="text.12.medium" color="gray.primary">
            Price
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
              <ETHIcon />
            </Box>

            <Text textStyle="h6">2.87 ETH ($9.1k USD)</Text>
          </HStack>
        </Box>

        <NumberInput w="284px" mt="27px" />
      </Box>

      <Box flex="1 0 0">
        <Box h="70px">
          <Text textStyle="text.12.medium" color="gray.primary">
            Sale ends in
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
              <TimerIcon h="20px" w="20px" />
            </Box>

            <DateCount />
          </HStack>
        </Box>

        <FilledButton w="284px" mt="27px" h="48px">
          Mint
        </FilledButton>
      </Box>
    </Flex>
  );
};

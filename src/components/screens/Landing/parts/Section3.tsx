import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Select,
  VStack,
} from "@chakra-ui/react";
import { TopSellItem } from "components/organisms/Item/TopSellItem/TopSellItem";
import { FC } from "react";

export const Section3: FC = () => {
  return (
    <Box px="80px" mx="auto" mb="90px">
      <Flex justify="center" alignItems="center" mb="60px">
        <Heading as="h3" textStyle="h3">
          Top sellings collections
        </Heading>
        <Select
          variant="unstyled"
          w="fit-content"
          size="lg"
          fontSize="28px"
          fontWeight="extrabold"
          color="purple.primary"
          ml="9px"
        >
          <option>last 7 days</option>
        </Select>
      </Flex>

      <HStack spacing="24px">
        <VStack
          spacing="21px"
          divider={<Divider borderColor="outline.light" />}
        >
          <TopSellItem
            number={1}
            collectionIcon={"/Art2.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={2}
            collectionIcon={"/Art1.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={3}
            collectionIcon={"/Art4.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
        </VStack>
        <VStack
          spacing="21px"
          divider={<Divider borderColor="outline.light" />}
        >
          <TopSellItem
            number={4}
            collectionIcon={"/Art5.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={5}
            collectionIcon={"/Art6.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={6}
            collectionIcon={"/Art2.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
        </VStack>
        <VStack
          spacing="21px"
          divider={<Divider borderColor="outline.light" />}
        >
          <TopSellItem
            number={7}
            collectionIcon={"/Art3.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={8}
            collectionIcon={"/Art4.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
          <TopSellItem
            number={9}
            collectionIcon={"/Art5.png"}
            currencyIcon={""}
            currentValue={19320.126}
            percentage={13.4}
          />
        </VStack>
      </HStack>
    </Box>
  );
};

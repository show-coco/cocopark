import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Select,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { TopSellItem } from "components/organisms/Item/TopSellItem/TopSellItem";
import { mobileMediaQuery } from "config/chakra-ui";
import { FC } from "react";

export const Section3: FC = () => {
  const [isMobile] = useMediaQuery(mobileMediaQuery);

  if (isMobile) {
    return <Mobile />;
  }

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

      <HStack spacing="24px" overflowY="scroll">
        <VStack
          spacing="21px"
          divider={<Divider borderColor="outline.light" />}
          flex="1 0 0"
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
          flex="1 0 0"
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
          flex="1 0 0"
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

export const Mobile: FC = () => {
  return (
    <Box px="30px" mb="90px">
      <Flex flexDir="column" alignItems="center" mb="60px">
        <Heading as="h3" textStyle="h3" mb="11px" textAlign="center">
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

      <VStack spacing="21px" divider={<Divider borderColor="outline.light" />}>
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
    </Box>
  );
};

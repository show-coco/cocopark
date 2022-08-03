import {
  HStack,
  Image,
  Table,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CircleIcon } from "components/atoms/Icon/CircleIcon";
import { LightTag } from "components/atoms/Tag/Tag";
import { TagLabel } from "components/atoms/Tag/TagLabel";
import { Price } from "components/molecules/Price/Price";
import { FC } from "react";

export const PayoutsTable: FC = () => {
  return (
    <Table border="1px solid" borderColor="outline.light">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Qty</Th>
          <Th>Payout</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <HStack spacing="18px">
              <Image src="/Art1.png" w="56px" h="56px" rounded="lg" />
              <Text textStyle="button.16">Election Season</Text>
            </HStack>
          </Td>
          <Td>
            <Price />
          </Td>
          <Td>1</Td>
          <Td>
            <Text textStyle="text.14.bold">$10.00 USD</Text>
          </Td>
          <Td>
            <LightTag>
              <TagLeftIcon as={CircleIcon} color="purple.primary" />
              <TagLabel>Pending</TagLabel>
            </LightTag>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

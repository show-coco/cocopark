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
import { ETHIcon } from "components/atoms/Icon/ETHIcon";
import { LightTag } from "components/atoms/Tag/Tag";
import { TagLabel } from "components/atoms/Tag/TagLabel";
import { Price } from "components/molecules/Price/Price";
import { FC } from "react";

export const ListingsTable: FC = () => {
  return (
    <Table border="1px solid" borderColor="outline.light">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th>Blockchain</Th>
          <Th>Price</Th>
          <Th>Views</Th>
          <Th>Auction</Th>
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
          <Td>Art</Td>
          <Td>
            <HStack spacing="8px">
              <ETHIcon />
              <Text>Ethereum</Text>
            </HStack>
          </Td>
          <Td>
            <Price />
          </Td>
          <Td>
            <Text textStyle="text.14.bold">
              {Number(3345).toLocaleString()}
            </Text>
          </Td>
          <Td>
            <LightTag>
              <TagLeftIcon as={CircleIcon} color="purple.primary" />
              <TagLabel>Running</TagLabel>
            </LightTag>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

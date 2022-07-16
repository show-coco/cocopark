import {
  Box,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Price } from "components/molecules/Price/Price";
import { FC } from "react";

export const OffersTable: FC = () => {
  return (
    <TableContainer border="1px" borderColor="outline.light" rounded="md">
      <Box borderBottom="1px" borderColor="outline.light" p="21px 25px">
        <Text textStyle="h6">Offers</Text>
      </Box>

      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Price</Th>
              <Th>USD Price</Th>
              <Th>Difference</Th>
              <Th>Expiration</Th>
              <Th>From</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Price />
              </Td>
              <Td>$6402.84</Td>
              <Td>29% below</Td>
              <Td>7 min</Td>
              <Td>nftinitcom</Td>
            </Tr>
            <Tr>
              <Td>
                <Price />
              </Td>
              <Td>$6402.84</Td>
              <Td>29% below</Td>
              <Td>7 min</Td>
              <Td>nftinitcom</Td>
            </Tr>
            <Tr>
              <Td>
                <Price />
              </Td>
              <Td>$6402.84</Td>
              <Td>29% below</Td>
              <Td>7 min</Td>
              <Td>nftinitcom</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </TableContainer>
  );
};

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

export const ItemActivityTable: FC = () => {
  return (
    <TableContainer
      border="1px"
      borderColor="outline.light"
      rounded="md"
      w="full"
    >
      <Box borderBottom="1px" borderColor="outline.light" p="21px 25px">
        <Text textStyle="h6">Item activity</Text>
      </Box>

      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Event</Th>
              <Th>Price</Th>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Transfer</Td>
              <Td></Td>
              <Td>nftinitcom</Td>
              <Td>nonkosi.joyi</Td>
              <Td>31 Dec 2021</Td>
            </Tr>
            <Tr>
              <Td>Sale</Td>
              <Td>
                <Price />
              </Td>
              <Td>nftinitcom</Td>
              <Td>nonkosi.joyi</Td>
              <Td>31 Dec 2021</Td>
            </Tr>
            <Tr>
              <Td>Transfer</Td>
              <Td></Td>
              <Td>nftinitcom</Td>
              <Td>nonkosi.joyi</Td>
              <Td>31 Dec 2021</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </TableContainer>
  );
};

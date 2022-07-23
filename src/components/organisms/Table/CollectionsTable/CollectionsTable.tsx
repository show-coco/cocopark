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
  Avatar,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { AvatarNameCaption } from "components/molecules/AvatarName/AvatarNameCaption";
import { Price } from "components/molecules/Price/Price";
import { FC } from "react";

export const CollectionsTable: FC = () => {
  return (
    <TableContainer
      border="1px"
      borderColor="outline.light"
      rounded="md"
      w="full"
    >
      <Table>
        <Thead h="66px">
          <Tr>
            <Th w="400px">Collections</Th>
            <Th>Owners</Th>
            <Th>1d</Th>
            <Th>Floor price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr h="88px">
            <Td>
              <AvatarNameCaption />
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text mb="4px" textStyle="text.14.regular">
                  10.0k
                </Text>
                <Text color="gray.primary" textStyle="text.14.regular">
                  Owners
                </Text>
              </Box>
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text color="green.primary" textStyle="text.14.bold">
                  +18,60%
                </Text>
                <Text textStyle="text.14.regular" color="gray">
                  1,040.00
                </Text>
              </Box>
            </Td>
            <Td>
              <Price />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <AvatarNameCaption />
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text mb="4px" textStyle="text.14.regular">
                  10.0k
                </Text>
                <Text color="gray.primary" textStyle="text.14.regular">
                  Owners
                </Text>
              </Box>
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text color="green.primary" textStyle="text.14.bold">
                  +18,60%
                </Text>
                <Text textStyle="text.14.regular" color="gray">
                  1,040.00
                </Text>
              </Box>
            </Td>
            <Td>
              <Price />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <AvatarNameCaption />
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text mb="4px" textStyle="text.14.regular">
                  10.0k
                </Text>
                <Text color="gray.primary" textStyle="text.14.regular">
                  Owners
                </Text>
              </Box>
            </Td>
            <Td>
              <Box w="fit-content" textAlign="right">
                <Text color="green.primary" textStyle="text.14.bold">
                  +18,60%
                </Text>
                <Text textStyle="text.14.regular" color="gray">
                  1,040.00
                </Text>
              </Box>
            </Td>
            <Td>
              <Price />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

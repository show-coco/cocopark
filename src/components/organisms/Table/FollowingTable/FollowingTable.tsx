import {
  Avatar,
  HStack,
  Icon,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ETHIcon } from "components/atoms/Icon/ETHIcon";
import { AvatarName } from "components/molecules/AvatarName/AvatarName";
import { Price } from "components/molecules/Price/Price";
import { FC } from "react";
import { MdBookmark } from "react-icons/md";

export const FollowingTable: FC = () => {
  return (
    <Table border="1px solid" borderColor="outline.light">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Blockchain</Th>
          <Th>Author</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <HStack spacing="18px">
              <IconButton
                aria-label="bookmark"
                variant="ghost"
                icon={
                  <Icon
                    as={MdBookmark}
                    color="purple.primary"
                    h="18px"
                    w="18px"
                  />
                }
              />
              <Image src="/Art1.png" w="56px" h="56px" rounded="lg" />
              <Text textStyle="button.16">Election Season</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing="8px">
              <ETHIcon />
              <Text>Ethereum</Text>
            </HStack>
          </Td>
          <Td>
            <AvatarName name="Langke Zambo" icon="/Art2.png" href="/users/1" />
          </Td>
          <Td>
            <Price />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <HStack spacing="18px">
              <IconButton
                aria-label="bookmark"
                variant="ghost"
                icon={
                  <Icon
                    as={MdBookmark}
                    color="purple.primary"
                    h="18px"
                    w="18px"
                  />
                }
              />
              <Image src="/Art1.png" w="56px" h="56px" rounded="lg" />
              <Text textStyle="button.16">Election Season</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing="8px">
              <ETHIcon />
              <Text>Ethereum</Text>
            </HStack>
          </Td>
          <Td>
            <AvatarName name="Langke Zambo" icon="/Art2.png" href="/users/1" />
          </Td>
          <Td>
            <Price />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <HStack spacing="18px">
              <IconButton
                aria-label="bookmark"
                variant="ghost"
                icon={
                  <Icon
                    as={MdBookmark}
                    color="purple.primary"
                    h="18px"
                    w="18px"
                  />
                }
              />
              <Image src="/Art1.png" w="56px" h="56px" rounded="lg" />
              <Text textStyle="button.16">Election Season</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing="8px">
              <ETHIcon />
              <Text>Ethereum</Text>
            </HStack>
          </Td>
          <Td>
            <AvatarName name="Langke Zambo" icon="/Art2.png" href="/users/1" />
          </Td>
          <Td>
            <Price />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <HStack spacing="18px">
              <IconButton
                aria-label="bookmark"
                variant="ghost"
                icon={
                  <Icon
                    as={MdBookmark}
                    color="purple.primary"
                    h="18px"
                    w="18px"
                  />
                }
              />
              <Image src="/Art1.png" w="56px" h="56px" rounded="lg" />
              <Text textStyle="button.16">Election Season</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing="8px">
              <ETHIcon />
              <Text>Ethereum</Text>
            </HStack>
          </Td>
          <Td>
            <AvatarName name="Langke Zambo" icon="/Art2.png" href="/users/1" />
          </Td>
          <Td>
            <Price />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

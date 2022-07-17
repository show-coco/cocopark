import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Icon,
  Box,
  Flex,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  FilledButton,
  OutlineRestingButton,
} from "components/atoms/Button/Button";
import { useWeb3React } from "@web3-react/core";
import {
  ConnectorNames,
  connectorsByName,
} from "providers/Web3Provider/Web3Provider";
import { CircleIcon } from "components/atoms/Icon/CircleIcon";
import { WalletConnectIcon } from "components/atoms/Icon/WalletConnectIcon";
import { MetamaskIcon } from "components/atoms/Icon/MemamaskIcon";

type Props = Omit<ModalProps, "children">;

const Icons: { [connectorName in ConnectorNames]: any } = {
  Metamask: MetamaskIcon,
  WalletConnect: WalletConnectIcon,
};

export const WalletModal: FC<Props> = ({ isOpen, onClose }) => {
  const { activate, connector } = useWeb3React();

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="12px">
            {Object.keys(connectorsByName).map((name) => {
              const connectorI = connectorsByName[name as ConnectorNames];
              const isConnected = connectorI === connector;

              return (
                <OutlineRestingButton
                  key={name}
                  w="full"
                  py="24px"
                  justifyContent="space-between"
                  rightIcon={
                    <Icon
                      h="24px"
                      w="24px"
                      as={Icons[name as ConnectorNames]}
                    />
                  }
                  onClick={() => {
                    activate(
                      connectorsByName[name as ConnectorNames],
                      (error) => {
                        console.log(error);
                      }
                    );
                  }}
                >
                  {isConnected ? (
                    <Flex alignItems="center">
                      <CircleIcon color="green" mr="8px" /> {name}
                    </Flex>
                  ) : (
                    <>{name}</>
                  )}
                </OutlineRestingButton>
              );
            })}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Box p="24px" bgColor="soft.primary" borderRadius="md">
            <Text textStyle="text.14.regular">
              By connecting a wallet, you agree to{" "}
              <Link color="blue">Terms of Service</Link>.
            </Text>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import { FC, ReactNode } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({});
export const walletconnect = new WalletConnectConnector({});

export enum ConnectorNames {
  Injected = "Metamask",
  WalletConnect = "WalletConnect",
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

function getLibrary(
  provider: providers.ExternalProvider | providers.JsonRpcFetchFunc
): providers.Web3Provider {
  const library = new providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

type Props = {
  children: ReactNode;
};

export const Web3Provider: FC<Props> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
};

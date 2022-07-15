import { useWeb3React } from "@web3-react/core";
import { CHAIN_ID_TO_NAME } from "constants/chainIds";
import { useCallback, useEffect, useState } from "react";
import { ERC20, ERC20__factory } from "types/contracts";
import { TokenAmount } from "types/domain";
import { tokenAmountFromBN } from "utils/ethers";
import WETHIcon from "../assets/svg/WETH.svg";
import ETHIcon from "../assets/svg/ETH.svg";
import useSWR from "swr";

export enum ERC20_SYMBOL {
  WETH = "WETH",
}

export const ERC20_ICONS: { [tokenSymbol in ERC20_SYMBOL]: any } = {
  WETH: WETHIcon,
};

export const NATIVE_TOKEN_ICONS = {
  ETH: ETHIcon,
};

const ERC20_ADDRESS: { [tokenSymbol in ERC20_SYMBOL]: any } = {
  WETH: {
    mainnet: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    rinkeby: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  },
};

type Token = {
  amount: TokenAmount;
  symbol: string;
  icon: string;
};

export const useERC20 = (symbol: ERC20_SYMBOL, account: string) => {
  const { library, chainId } = useWeb3React();
  const [contract, setContract] = useState<ERC20>();
  const { data, mutate } = useSWR(
    [account, contract, "getBalance"],
    (account) => {
      if (!contract) return;
      return fetch(account, contract);
    }
  );

  const fetch = useCallback(
    async (account: string, contract: ERC20): Promise<Token | undefined> => {
      const balance = await contract.balanceOf(account);
      const _symbol = await contract.symbol();
      const amount = tokenAmountFromBN(balance);
      const token: Token = {
        amount,
        symbol: _symbol,
        icon: ERC20_ICONS[symbol],
      };

      return token;
    },
    [contract, account]
  );

  useEffect(() => {
    if (!chainId) return;

    const chainName = CHAIN_ID_TO_NAME[chainId];
    const address = ERC20_ADDRESS[symbol][chainName];

    if (!address)
      throw new Error(`address of ${symbol} is not configured for ${chainId}`);

    const erc20Contract = ERC20__factory.connect(address, library);
    setContract(erc20Contract);
  }, [chainId]);

  // FIXME: It makes rerender everytime
  // Realt-time updating
  // useEffect(() => {
  //   library.on("block", () => {
  //     mutate(undefined, true);
  //   });

  //   return () => {
  //     library.removeAllListeners("block");
  //   };
  // }, []);

  return {
    data,
  };
};

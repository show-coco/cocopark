import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import useSWR from "swr";
import { tokenAmountFromBN } from "utils/ethers";

export const useNativeToken = (account: string) => {
  const { library } = useWeb3React();
  const { data } = useSWR([account, "getBalance"], () => fetch(account));

  const fetch = async (account: string) => {
    const _ethBalance: BigNumber = await library.getBalance(account);
    return tokenAmountFromBN(_ethBalance);
  };

  return { data };
};

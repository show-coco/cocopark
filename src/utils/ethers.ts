import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { TokenAmount } from "types/domain";

export const tokenAmountFromBN = (num: BigNumber): TokenAmount => {
  return {
    hex: num._hex,
    formatted: parseFloat(formatEther(num)).toPrecision(4),
  };
};

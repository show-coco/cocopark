export enum CHAIN_NAMES {
  mainnet = "mainnet",
  rinkeby = "rinkeby",
}

export const CHAIN_ID_TO_NAME: { [id in number]: CHAIN_NAMES } = {
  1: CHAIN_NAMES.mainnet,
  4: CHAIN_NAMES.rinkeby,
};

export const CHAIN_ID: { [name in CHAIN_NAMES]: number } = {
  mainnet: 1,
  rinkeby: 4,
};

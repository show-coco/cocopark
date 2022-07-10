export const omitAddress = (address: string) => {
  return address.slice(0, 14) + "..." + address.slice(-5);
};

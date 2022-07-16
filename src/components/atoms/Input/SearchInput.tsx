import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = InputProps;

export const SearchInput: FC<Props> = ({ ...props }) => {
  return (
    <InputGroup w="full">
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input rounded="full" variant="filled" maxW="520px" {...props} />
    </InputGroup>
  );
};

import { HStack } from "@chakra-ui/react";
import {
  FilledButton,
  FilledRestingButton,
} from "components/atoms/Button/Button";
import Link from "next/link";
import { FC } from "react";

type Props = {
  backHref: string;
  nextHref: string;
};

export const NextBackButtonGroup: FC<Props> = ({ backHref, nextHref }) => {
  return (
    <HStack mt="48px" justify="space-between">
      <Link href={backHref}>
        <FilledRestingButton w="193px">Back</FilledRestingButton>
      </Link>
      <Link href={nextHref}>
        <FilledButton w="193px">Next</FilledButton>
      </Link>
    </HStack>
  );
};

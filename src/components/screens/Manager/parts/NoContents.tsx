import { Box, Text } from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import Link from "next/link";
import { FC } from "react";
import HumanAndMetrics from "../../../../assets/svg/HumanAndMetrics.svg";

type Props = {
  title: string;
  description: string;
  icon?: any;
};

export const NoContents: FC<Props> = ({
  title,
  description,
  icon = <HumanAndMetrics />,
}) => {
  return (
    <Box w="fit-content" mx="auto" mt="50px" textAlign="center">
      <Box mx="auto" w="fit-content">
        {icon}
      </Box>
      <Text textStyle="h3" mt="40px">
        {title}
      </Text>
      <Text
        textStyle="text.14.regular"
        color="gray.primary"
        mt="11px"
        mb="24px"
      >
        {description}
      </Text>
      <Link href="/explore">
        <FilledButton w="240px">Explore NFTs</FilledButton>
      </Link>
    </Box>
  );
};

import { FC, ReactNode } from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { SimpleHeader } from "components/organisms/Header/GuestHeader";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export const AssetNewTemplate: FC<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <Box>
      <SimpleHeader />
      <Box pb="128px">
        <Box w="628px" mx="auto" textAlign="center" pt="30px">
          <Heading as="h1" mb="8px">
            {title}
          </Heading>
          <Text textStyle="text.14.regular" mb="62px">
            {description}
          </Text>

          {children}
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { Sidebar } from "components/organisms/Sidebar/Sidebar";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SidebarTemplate: FC<Props> = ({ children }) => {
  return (
    <Box>
      <HeaderWithSearch />
      <Flex>
        <Sidebar />

        <Box py="40px" px="80px">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

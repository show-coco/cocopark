import { Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";
import HumanAndDesc from "../../../../assets/svg/HumanAndDesk.svg";

export const ListingsScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Your listings</Heading>
      <NoContents
        title="Favorite items not found"
        description="Let's find your favorite NFTs"
        icon={<HumanAndDesc />}
      />
    </SidebarTemplate>
  );
};

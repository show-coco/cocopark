import { Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";
import HumanAndDesc from "../../../../assets/svg/HumanAndDesk.svg";

export const FollowingScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Following</Heading>
      <NoContents
        title="Following not found"
        description="Let's find your favorite users"
        icon={<HumanAndDesc />}
      />
    </SidebarTemplate>
  );
};

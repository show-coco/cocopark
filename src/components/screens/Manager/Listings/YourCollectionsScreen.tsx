import { Flex, Heading } from "@chakra-ui/react";
import { SidebarTemplate } from "components/templates/SidebarTemplate/SidebarTemplate";
import { FC } from "react";
import { NoContents } from "../parts/NoContents";
import { CollectionCardV1 } from "components/organisms/Card/CollectionCard/CollectionCardV1";

export const YourCollectionsScreen: FC = () => {
  return (
    <SidebarTemplate>
      <Heading as="h1">Your collections</Heading>

      <Flex gap="24px" mt="32px" flexWrap="wrap">
        <CollectionCardV1 href="/manager/your-listings/collections/1" />
        <CollectionCardV1 href="/manager/your-listings/collections/1" />
        <CollectionCardV1 href="/manager/your-listings/collections/1" />
        <CollectionCardV1 href="/manager/your-listings/collections/1" />
      </Flex>
    </SidebarTemplate>
  );
};

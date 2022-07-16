import { Avatar, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  size?: "md" | "lg";
  icon?: string;
  name: string;
};

export const AvatarAndName: FC<Props> = ({ icon, name, size = "md" }) => {
  switch (size) {
    case "lg":
      return (
        <HStack>
          <Avatar src={icon} />
          <Text textStyle="text.14.bold">{name}</Text>
        </HStack>
      );

    case "md":
    default:
      return (
        <HStack spacing="8px">
          <Avatar src={icon} size="sm" />
          <Text textStyle="text.14.regular">{name}</Text>
        </HStack>
      );
  }
};

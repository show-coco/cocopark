import { ButtonProps, forwardRef, Icon } from "@chakra-ui/react";
import { OutlineRestingButton } from "./Button";
import { AiOutlineHeart } from "react-icons/ai";

export const FavoriteButton = forwardRef<ButtonProps, "button">(
  (props, ref) => {
    return (
      <OutlineRestingButton
        px="20px"
        leftIcon={<Icon w="18px" h="18px" as={AiOutlineHeart} />}
        {...props}
        ref={ref}
      >
        99
      </OutlineRestingButton>
    );
  }
);

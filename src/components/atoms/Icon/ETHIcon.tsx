import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = IconProps;

export const ETHIcon: FC<Props> = (props) => (
  <Icon
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <svg>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00066 0V5.9146L3.62561 7.87027L8.00066 5.91577V11.0508L3.00351 8.14835L3.00335 8.14841L3.0034 8.1483L3.00335 8.14824L3.00346 8.14819L8.00066 0ZM8.00199 0L12.9998 8.14819L13 8.14824L12.9999 8.1483L13 8.14841L12.9998 8.14835L8.00199 11.0508V5.91577L12.3776 7.87027L8.00199 5.9146V0ZM8.00066 11.9812V16L3 9.07922L8.00066 11.9812ZM8.00199 16V11.9805L13 9.07922L8.00199 16Z"
        fill="#6B8CEF"
      />
    </svg>
  </Icon>
);

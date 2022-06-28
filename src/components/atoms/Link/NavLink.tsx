import { FC } from "react";
import { Link, LinkProps } from "./Link";

export const NavLink: FC<LinkProps> = (props) => {
  return (
    <Link textStyle="button.16" color="gray.primary" {...props}>
      {props.children}
    </Link>
  );
};

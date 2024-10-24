import React from "react";
import IconFactory from "../../../factories/IconFactory";
import styles from "./NavMenuButton.module.css";

type Props = React.HTMLProps<HTMLButtonElement> & {
  type: "open" | "close"
};

const NavMenuButton = ({ type, ...buttonProps }: Props) => {
  return (
    <button className={styles.button} data-open={type} {...buttonProps}>
      <span className="a-hidden">{type} navigation</span>
      {type === "open" ? (
        <IconFactory icon="hamburgerMenu" />
      ) : (
        <IconFactory icon="closeMenu" />
      )}
    </button>
  );
};

NavMenuButton.displayName = "Global.Nav.MenuButton";

export default NavMenuButton;

import React from "react";
import { Button, ButtonLink } from "../../../atomic";
import { UnderlinedLink, Text } from "../../../typography";
import styles from "./NavList.module.css";
import clsx from "clsx";
import siteConfig from "@generated/docusaurus.config";

const manifoldVersion = siteConfig.customFields?.manifoldVersion as string | undefined;

type Props = {
  isMobile?: boolean;
  routes?: any[];
}

const NavList = ({ isMobile, routes }: Props) => {
  return (
    <ul className={clsx(styles.list, {[styles["list--is-mobile"]]: isMobile})}>
      {routes.map(({ label, isButton, isSelected, ...linkProps }, i) => (
        <li key={i} className={styles.list__item}>
          {isButton ? (
            <ButtonLink {...linkProps} size="small">
              Get Started
            </ButtonLink>
          ) : (
            <UnderlinedLink
              data-selected={isSelected}
              size="nav"
              {...linkProps}
            >
              {label}
            </UnderlinedLink>
          )}
        </li>
      ))}
      <li className={styles.list__item}>
        {manifoldVersion && <Text size="nav">{manifoldVersion}</Text>}
      </li>
    </ul>
  );
};

NavList.displayName = "Global.Nav.List";

export default NavList;

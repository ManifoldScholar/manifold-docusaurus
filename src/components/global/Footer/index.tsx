import React from "react";
import HomeLink from "../HomeLink";
import { Heading } from "../../typography";
import IconFactory from "../../factories/IconFactory";
import FooterLink from "./FooterLink";
import styles from "./Footer.module.css";

type Props = {
  wrapperClassName?: string;
  links?: any[]
};

const Footer = ({ wrapperClassName, links }: Props) => {
  const today = new Date();

  return (
    <footer className={`${styles.footer} ${wrapperClassName} a-bg-black`}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__left}>
          <HomeLink hoverColor="neutral50" />
        </div>
        <div className={styles.footer__right}>
          <nav className={styles.footer__nav}>
            {links.map(({ title, items }, i) => (
              <div key={i} className={styles["footer__link-group"]}>
                <Heading as="h3" weight="semi-bold" uppercase>
                  {title}
                </Heading>
                {items && (
                  <ul className={styles["footer__link-list"]}>
                    {items.map(({ label, icon, ...linkProps }, k) => (
                      <li key={k} className={styles["footer__link-item"]}>
                        <FooterLink {...linkProps}>
                          {icon && <IconFactory icon={icon} size={20} />}
                          <span>{label}</span>
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <p className={styles.footer__copyright}>
            &copy; {today.getFullYear()} Manifold
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Global.Footer";

export default Footer;

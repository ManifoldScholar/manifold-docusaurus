import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fluidScale, respond } from "../../../styles/mixins";
import get from "lodash/get";
import { default as DocLink } from "@docusaurus/Link";
import HomeLink from "../HomeLink";
import { Heading } from "../../typography";
import IconFactory from "../../factories/IconFactory";

import FooterLink from "./FooterLink";

const Footer = ({ className, wrapperClassName, links }) => {
  const today = new Date();

  return (
    <footer className={`${className} ${wrapperClassName} a-bg-black`}>
      <div className={`${className}__inner`}>
        <div className={`${className}__left`}>
          <HomeLink bgColor="black" hoverColor="neutral50" />
        </div>
        <div className={`${className}__right`}>
          <nav className={`${className}__nav`}>
            {links.map(({ title, items }, i) => (
              <div key={i} className={`${className}__link-group`}>
                <Heading as="h3" weight="semi-bold" uppercase>
                  {title}
                </Heading>
                {items && (
                  <ul className={`${className}__link-list`}>
                    {items.map(({ label, icon, ...linkProps }, k) => (
                      <li key={k} className={`${className}__link-item`}>
                        <FooterLink as={DocLink} {...linkProps}>
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
          <p className={`${className}__copyright`}>
            &copy; {today.getFullYear()} Manifold
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Global.Footer";

Footer.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  links: PropTypes.array
};

const StyledFooter = styled(Footer)`
  --footer-gap: 54px;
  padding: ${fluidScale("90px", "80px")} var(--l-container-padding)
    ${fluidScale("42px", "52px")};

  html[data-theme="dark"] & {
    --background-color: #1a1a1a;
  }

  &__inner {
    --header-color: var(--neutral60);
    --text-color: var(--neutral70);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--l-container-wide);
    font-weight: var(--font-weight-regular);
  }

  &__left {
    width: 100%;
    max-width: 150px;
    margin-bottom: 60px;
    color: var(--white);
  }

  &__right {
    width: 100%;
    max-width: ${fluidScale("478px", "420px")};
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--footer-gap);
  }

  &__link-group {
    flex: 1 1 calc(33% - var(--footer-gap));

    ${respond(
      css`
        flex: 1 1 calc(50% - var(--footer-gap));
      `,
      50
    )}
  }

  &__link-list {
    margin-top: 18px;
  }

  &__link-group:last-of-type &__link-list {
    ${respond(
      css`
        columns: 2;
        column-gap: var(--footer-gap);
      `,
      50
    )}

    ${respond(
      css`
        columns: 1;
      `,
      30
    )}
  }

  &__copyright {
    width: 100%;
    margin-top: ${fluidScale("145px", "80px")};
    font-size: 13px;
  }
`;

export default StyledFooter;

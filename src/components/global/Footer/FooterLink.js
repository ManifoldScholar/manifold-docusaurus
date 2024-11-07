import React from "react";
import styled from "styled-components";

const FooterLink = styled.a`
  transition: color ease 0.2s;
  display: flex;
  align-items: center;
  line-height: 2.28;
  font-size: var(--font-size-xs);
  color: var(--white);

  svg {
    transition: color ease 0.2s;
    flex: none;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color: var(--text-color);
  }

  &:hover,
  &:hover svg {
    color: var(--color-secondary);
  }
`;

FooterLink.displayName = "Global.Footer.Link";

export default FooterLink;

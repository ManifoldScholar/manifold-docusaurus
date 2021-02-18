import React from 'react';
import OriginalNavBar from '@theme-original/Navbar';
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

function NavBar(props) {
  return (
    <>
      <Button>I'm a Themed Button</Button>
      <OriginalNavBar {...props} />
    </>
  )
}

export default NavBar;

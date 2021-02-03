import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 72px;
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Side = styled.div`
  flex: 1;

  &:first-of-type {
    margin-right: 48px;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0 48px;
  gap: 48px;
  /* TODO: Use this, maybe with clamp? */
  gap: max(calc(10vw - 60px), 32px);
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  line-height: 72px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

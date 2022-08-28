import React from 'react';
import HeaderMenu from './header-components/HeaderMenu';
import Logo from './header-components/Logo';

const Header = () => (
  <div className={'w-full flex flex-row justify-between align-baseline pt-5 pb-5'}>
    <Logo />
    <HeaderMenu />
  </div>
);

export default Header;

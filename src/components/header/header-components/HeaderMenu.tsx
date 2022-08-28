import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => (
  <nav className={'flex-1 flex flex-row justify-end align-middle'}>
    <ul className={'flex-1 flex flex-row justify-end'}>
      <li className={'flex items-center px-2 text-xl text-black font-semibold text-white hover:underline'}>
        <Link to={'/episodes'}>Episodes</Link>
      </li>
      <li className={'flex items-center px-2 text-xl text-black font-semibold text-white hover:underline'}>
        <Link to={'/characters'}>Characters</Link>
      </li>
    </ul>
  </nav>
);

export default HeaderMenu;

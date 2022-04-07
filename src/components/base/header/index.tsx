import React from 'react';

import HeaderComponent from './header_component';

export interface NavListType {
  url: string;
  text: string;
}

export interface HeaderPropsType {
  navList: NavListType[];
}

const Header: React.FC = (props) => {
  const navList: NavListType[] = [
    { url: '/game/investing', text: '🎮 모의 투자 게임' },
    { url: '/test', text: 'TEST' },
  ];

  return <HeaderComponent navList={navList} {...props} />;
};

export default Header;

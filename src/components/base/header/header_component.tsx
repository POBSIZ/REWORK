import React, { useState, useCallback } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link';
import { nanoid } from 'nanoid';

import { HeaderPropsType } from '.';
import StyledHeader from './header_styled';

const NavTab: React.FC<HeaderPropsType> = ({ navList }: HeaderPropsType) => {
  const [navTabStyle, setNavTabStyle] = useState<any>();
  const [navBgStyle, setNavBgStyle] = useState<any>();
  const [navStyle, setNavStyle] = useState<any>();

  const navOpen = useCallback(() => {
    setNavTabStyle({
      transform: 'translateX(-50%)',
      opacity: '100%',
    });
    setNavStyle({
      transform: 'translateX(0%)',
      opacity: '100%',
    });
    setNavBgStyle({
      transform: 'translateX(0%)',
      opacity: '100%',
    });
  }, [navTabStyle, navBgStyle, navStyle]);

  const navClose = useCallback(() => {
    setNavStyle({
      transform: `translateX(100%)`,
      opacity: '0',
    });
    setNavBgStyle({
      transform: `translateX(-100%)`,
      opacity: '100%',
    });
    setTimeout(() => {
      setNavTabStyle({
        transform: `translateX(-300%)`,
        opacity: '0',
      });
    }, 400);
  }, [navTabStyle, navBgStyle, navStyle]);

  return (
    <nav className="nav">
      <FontAwesomeIcon
        icon={faBars as IconProp}
        className="nav-menuBar"
        onClick={navOpen}
      />

      <div className="navTab" style={navTabStyle}>
        <div className="navTab-container" style={navStyle}>
          <div className="navTab-user">
            <p className="user-more">안녕하세요!</p>
          </div>
          <ul className="navTab-link">
            {navList?.map((item) => (
              <Link href={item.url} key={nanoid()}>
                <a onClick={navClose}>{item.text}</a>
              </Link>
            ))}
          </ul>
        </div>
        <div className="navTab-bg" onClick={navClose} style={navBgStyle}></div>
      </div>
    </nav>
  );
};

const HeaderComponent: React.FC<HeaderPropsType> = ({
  navList,
}: HeaderPropsType) => {
  return (
    <StyledHeader className="header">
      <div className="logo">
        <Logo href={'/'}>{process.env.NEXT_PUBLIC_TITLE}</Logo>
      </div>
      <NavTab navList={navList} />
    </StyledHeader>
  );
};

export default HeaderComponent;

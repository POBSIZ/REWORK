import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledFooter from './footer_styled';

const FooterComponent: React.FC<any> = ({}) => {
  return (
    <StyledFooter className="footer">
      <h3 className="footer-logo">{process.env.NEXT_PUBLIC_TITLE}</h3>
      <div className="footer-mid">
        <div className="footer-copyright">
          ©Copyright 2021 {process.env.NEXT_PUBLIC_TITLE} All rights reserved
        </div>
        <div className="footer-address">{process.env.NEXT_PUBLIC_TITLE}</div>
      </div>
      <div className="footer-link">
        <a
          href="/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube as IconProp} />
        </a>
        <a href="https://www.instagram.com/pobsiz" target="_blank">
          <FontAwesomeIcon icon={faInstagram as IconProp} />
        </a>
        <a href="mailto:gjehdtjr911@gmail.com">
          <FontAwesomeIcon icon={faEnvelope as IconProp} />
        </a>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;

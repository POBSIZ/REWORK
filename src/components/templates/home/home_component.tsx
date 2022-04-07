import React from 'react';

import StyledHome from './home_styled';
import { AosWrapper } from 'Hoc';

const HomeComponent: React.FC<any> = ({}) => {
  return (
    <StyledHome className="home_about">
      <AosWrapper animation="fade-up">
        <h1>Hello</h1>
      </AosWrapper>
    </StyledHome>
  );
};

export default HomeComponent;

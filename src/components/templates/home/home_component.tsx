import React, { useEffect } from 'react';

import StyledHome from './home_styled';
import { AosWrapper, AosInitializer } from 'Hoc';

const HomeComponent: React.FC<any> = ({}) => {
  return (
    <AosInitializer>
      <StyledHome className="home_about">
        {[...Array(100)].map((item, id) => (
          <AosWrapper animation="fade-up" delay={100} key={id}>
            <h1>Hello</h1>
          </AosWrapper>
        ))}
      </StyledHome>
    </AosInitializer>
  );
};

export default HomeComponent;

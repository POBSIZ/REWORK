import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import { Header, Footer } from 'Bases';
import { Toast } from 'Bases';

import StyledMain from './styledMain';

const ProviderLayout: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const cookies = useCookies();
  const auth = useSelector((store: RootStateOrAny) => store.authReducer);

  // axios.defaults.baseURL = 'https://buscp.org/api/';
  // axios.defaults.baseURL = 'http://172.30.1.32:8000/api/';
  axios.defaults.baseURL = 'http://localhost:3000/';

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = `JWT ${auth?.accessToken}`;
  axios.defaults.headers.common['X-CSRFToken'] = cookies[0].csrftoken;

  const handleRouteChange = useCallback(() => {
    console.log('Page Change');
  }, [router]);

  useEffect(() => {
    // router.events.on('routeChangeStart', handleRouteChange);
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <Toast />
    </>
  );
};

export default ProviderLayout;

import React from 'react';
import Header from '../header/header';
import styled from 'styled-components';
import Footer from '../footer/footer';
import { Outlet } from 'react-router';

const MainPage = styled.div`
  height: 100%;
  width: 100%;
  background: url(assets/img/background1.jpg) no-repeat center;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
  border:1px solid transparent;
  position:relative;
  top:100px;
`;

const Page = () => {
  return (
    <MainPage>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      {/* <Footer /> */}
    </MainPage>
  )
}

export default Page;
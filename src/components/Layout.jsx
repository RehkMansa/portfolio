import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LeftSection from './LeftSection';

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 47% 1fr;
  height: 100%;

  @media screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Fixed = styled.div`
  max-width: 560px;
  height: 100vh;
  padding: 100px 0px;
  padding-left: 16%;

  @media screen and (max-width: 670px) {
    height: 100%;
    max-width: 100%;
    padding: 50px 5%;
  }
`;

const MainWrapper = styled.main`
  padding: 70px 50px 100px;
  padding-right: 16%;
  height: 100vh;
  overflow-y: auto;
  position: relative;

  @media screen and (max-width: 670px) {
    padding: 50px 5%;
    width: 100%;
  }
`;
const Layout = () => {
  return (
    <Wrapper>
      <Fixed>
        <LeftSection />
      </Fixed>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </Wrapper>
  );
};

export default Layout;

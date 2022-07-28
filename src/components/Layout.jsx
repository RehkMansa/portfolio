import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LeftSection from './LeftSection';

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 47% 1fr;
  height: 100%;
`;

const Fixed = styled.div`
  max-width: 560px;
  height: 100vh;
  padding: 100px 0px;
  padding-left: 16%;
`;

const MainWrapper = styled.main`
  padding: 100px 50px;
  padding-right: 16%;
  height: 100vh;
  overflow-y: auto;
  position: relative;
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

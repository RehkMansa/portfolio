import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  
`;

const Layout = () => {
  return (
    <Wrapper>
      <p>Left Layout</p>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

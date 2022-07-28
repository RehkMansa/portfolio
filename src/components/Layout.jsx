import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LeftSection from './LeftSection';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
`;
const Layout = () => {
  return (
    <Wrapper>
      <LeftSection />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

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
    padding: 30px 5%;
  }
`;

const MainWrapper = styled.main`
  padding: 70px 50px 100px;
  padding-right: 16%;
  height: 100vh;
  overflow-y: auto;
  position: relative;

  @media screen and (max-width: 670px) {
    padding: 20px 5%;
    height: 100%;
    width: 100%;
    min-height: 300px;
  }
`;

const InspiredWrapper = styled.div`
  font-family: var(--font-header);
  margin-top: 20px;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 1px;

  span {
    color: var(--text-white);
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
        <InspiredWrapper>
          <p>
            Inspired by{' '}
            <a
              target={'_blank'}
              rel={'noreferrer'}
              href="https://www.kingslee.me"
            >
              <span>kingslee</span>
            </a>
          </p>
        </InspiredWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default Layout;

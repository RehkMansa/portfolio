import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavItem from './NavItem';
import { slideInLeft } from 'react-animations';

const slideAnimation = keyframes`${slideInLeft}`;

const Wrapper = styled.div`
  padding: 30px;
  background-color: var(--bg-alt);
  display: flex;
  gap: 20px;
  width: 300px;
  height: 100vh;
  gap: 30px;
  animation: 1s ${slideAnimation};
`;

const WrapperOverlay = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100vh;
  z-index: 10;
  width: 100%;
  background-color: rgba(21, 21, 21, 0.6);
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  gap: 10px;
  .btn-toggle {
    align-self: end;
    cursor: pointer;
    font-size: 24px;
  }

  @media screen and (max-width: 670px) {
    display: flex;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 20%;
  gap: 30px;
  .override-style {
    a {
      font-size: 1.6rem;
      font-weight: 500;
    }
    .line {
      display: none;
    }
  }
`;
const WrapperHeader = styled.div`
  width: 100%;

  h3 {
    font-size: 3rem;
  }
`;
const MobileMenu = () => {
  const [toggler, setToggler] = useState(false);

  const closeToggler = () => {
    setToggler(false);
  };
  return (
    <Container className="f-c ai-s">
      <div className="btn-toggle" onClick={() => setToggler(!toggler)}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
      {toggler && (
        <WrapperOverlay>
          <Wrapper className="f-c ai-c">
            <WrapperHeader className="flex-20 jc-sb ai-c">
              <h3>rehkmansa</h3>
              <div className="btn-toggle" onClick={() => setToggler(!toggler)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </WrapperHeader>
            <LinkWrapper className="flex-20 f-c ai-s">
              <div onClick={closeToggler}>
                <NavItem
                  className="override-style"
                  name="Projects"
                  link="/"
                  number={'00'}
                />
              </div>
              <div onClick={closeToggler}>
                <NavItem
                  className="override-style"
                  name="Resume"
                  link="resume"
                  number={'01'}
                />
              </div>
            </LinkWrapper>
          </Wrapper>
        </WrapperOverlay>
      )}
    </Container>
  );
};

export default MobileMenu;

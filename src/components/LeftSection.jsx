import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  .header {
    margin-bottom: 40px;
    h1 {
      font-size: 6.25rem;
      color: #fff;
      line-height: 1;
      font-weight: 700;
      margin-bottom: 16px;
      font-family: 'Ubuntu', sans-serif;
    }

    h4 {
      font-weight: 500;
      font-size: 2.4rem;
      color: var(--text-alt);
    }
  }
  .description {
    p {
      line-height: 2;
      // font-family: ubuntu;

      span {
        color: var(--text-white);
      }
    }
  }
`;

const Navigation = styled.div`
  gap: 50px;
  margin-top: 50px;
`;

const NavWrap = styled.div`
  a {
    gap: 10px;
    font-weight: 700;
    font-size: 1rem;
    opacity: 0.89;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  a.active,
  a:hover {
    color: var(--text-white);
    .line {
      width: 48px;
    }
  }
  .line {
    width: 24px;
    background-color: #fff;
    height: 1px;
    display: block;
    transition: all 0.3s ease-in-out;
  }
`;

const NavItem = (props) => {
  return (
    <NavWrap>
      <NavLink className="flex-center jc-s" to={props.link}>
        <span>{props.number}</span> <span className="line"></span>
        {props.name}
      </NavLink>
    </NavWrap>
  );
};

const LeftSection = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1>Rehk Mansa</h1>
        <h4>Freelance Frontend Developer</h4>
      </div>
      <div className="description">
        <p>
          Hello, I'm <span>Rehk</span>, a frontend developer. I love
          <span> problem solving</span> and critical thinking, I live for the
          challenge, I use coding as a tool to
          <span> solve problems</span>. I am currently interested in
          <span> building interactive</span> UI's for game development.
        </p>
        <Navigation className="flex f-c ac-s">
          <NavItem name="Projects" link="/" number={'00'} />
          <NavItem name="Resume" link="resume" number={'01'} />
          <NavItem name="Articles" link="write-ups" number={'02'} />
        </Navigation>
        <i className="fab fa-github"></i>
      </div>
    </Wrapper>
  );
};

export default LeftSection;
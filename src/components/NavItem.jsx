import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

  @media screen and (max-width: 670px) {
  }
`;

const NavItem = (props) => {
  return (
    <NavWrap className={props.className}>
      <NavLink className="flex-center jc-s" to={props.link}>
        <span>{props.number}</span> <span className="line"></span>
        {props.name}
      </NavLink>
    </NavWrap>
  );
};

export default NavItem;

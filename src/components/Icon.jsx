import styled from 'styled-components';
const Wrapper = styled.a`
  gap: 10px;
  color: var(--text-white) !important;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 670px) {
    opacity: 1 ;
  }
`;

const Icon = ({ iconClass, name, link }) => {
  return (
    <Wrapper
      href={link}
      target={'_blank'}
      rel={'noreferrer'}
      className="flex ai-c"
    >
      <i className={iconClass}></i>
      <p>{name}</p>
    </Wrapper>
  );
};

export default Icon;

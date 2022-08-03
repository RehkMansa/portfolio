import styled from 'styled-components';
const Wrapper = styled.div`
  gap: 10px;
  color: var(--text-white);
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Icon = ({ iconClass, name }) => {
  return (
    <Wrapper className="flex ai-c">
      <i className={iconClass}></i>
      <p>{name}</p>
    </Wrapper>
  );
};

export default Icon;

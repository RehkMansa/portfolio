import styled from "styled-components";

const StackWrapper = styled.div`
  gap: 10px;
  p {
    font-weight: 500;
    font-family: var(--font-header);
  }
`;
const Stack = ({ name, icon }) => {
  return (
    <StackWrapper className="flex g-10 ai-c">
      <i className={`fa-brands fa-${icon}`} />
      <p>{name}</p>
    </StackWrapper>
  );
};

export default Stack;

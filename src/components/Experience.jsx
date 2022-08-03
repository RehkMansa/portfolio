import styled from 'styled-components';

const Wrapper = styled.div``;

const Experience = ({ name }) => {
  return (
    <Wrapper>
      <p>{name}</p>
    </Wrapper>
  );
};

export default Experience;

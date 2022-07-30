import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h2 {
    font-size: 40px;
  }

  a {
    border: 1px solid;
    padding: 12px 30px;
    

    &:hover {
      color: var(--text-white);
    }
  }
`;

const Writings = () => {
  return (
    <Wrapper className="f-c">
      <h2>Coming soon</h2>
      <p>I'm still actively thinking about writing and I'm yet to write</p>
      <Link to={'/'}>View Projects</Link>
    </Wrapper>
  );
};

export default Writings;

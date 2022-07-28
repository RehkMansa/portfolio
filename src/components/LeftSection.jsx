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
`

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
          <span> problem solving</span> and <span>critical thinking</span>, I
          <span> live for</span> the challenge, I use coding as a tool to
          <span> solve problems</span>. I am currently interested in
          <span> building interactive</span> UI's for game development.
        </p>
        <Navigation className='flex column '>

        </Navigation>
      </div>
    </Wrapper>
  );
};

export default LeftSection;

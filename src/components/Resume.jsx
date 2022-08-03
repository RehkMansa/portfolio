import styled from 'styled-components';
import Experience from './Experience';
import Stack from './Stack';
import { pastExperience, stacks } from './utils/data';

const Wrapper = styled.div``;

const Header = styled.div`
  gap: 10px;
  margin-bottom: 24px;

  h2 {
    font-size: 20px;
  }
`;

const ContentWrapper = styled.div`
  gap: 10px;
`;

const ContentArticle = styled.article`
  padding: 40px;
  background-color: var(--bg-alt);
  transition: all 0.2s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  h3 {
    font-size: 24px;
  }

  .stack-container {
    flex-wrap: wrap;
    gap: 15px 20px;
  }
`;

const Resume = () => {
  return (
    <Wrapper>
      <Header className="flex ai-c">
        <i className="fa-solid fa-file-lines"></i>
        <h2>My Resume</h2>
      </Header>

      <ContentWrapper className="flex-20 ai-s f-c">
        <ContentArticle className="flex-20 f-c">
          <h3>About Me</h3>
          <p>
            Hello my name is Godspower Nathaniel, I'm a frontend developer,
            interested in having my lines of code in a popular opensource repo.
            I love startups, game development and basically everything tech.
            That said, I want to launch a startup that actually solves problems,
            at the same time build my own game. Everything I do is a step to my
            goal
          </p>
        </ContentArticle>
        <ContentArticle>
          <h3>Tech Stack</h3>
          <div className="flex-20 stack-container">
            {stacks.map((stack, n) => (
              <Stack key={n} name={stack.name} icon={stack.icon} />
            ))}
          </div>
        </ContentArticle>
        <ContentArticle className="g-30">
          <h3>Past Experience</h3>
          {pastExperience.map((exp, n) => (
            <Experience
              key={n}
              name={exp.name}
              duration={exp.duration}
              role={exp.role}
            />
          ))}
        </ContentArticle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Resume;

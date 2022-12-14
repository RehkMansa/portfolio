import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';
import LiveProjects from './LiveProjects';
import { fetchRepos } from './utils/helper';

const Wrapper = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header {
    text-align: left;
    align-self: start;
    margin-bottom: 30px;
    font-size: 20px;
    justify-content: space-between;

    .title {
      gap: 10px;
      align-items: center;
    }

    .navigation {
      gap: 10px;
      min-width: 100px;
      justify-content: end;
      font-size: 16px;
      transition: all 1s ease-in-out;
      p {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
        opacity: 0;
        transition: all 1s ease-in-out;
      }
    }

    .navigation:hover {
      cursor: pointer;
      gap: 20px;
      color: var(--text-white);

      p {
        opacity: 1;
      }
    }

    h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 757px) {
    .header {
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  @media screen and (max-width: 670px) {
    .header {
      .navigation {
        color: var(--text-white);
        gap: 20px;
        p {
          opacity: 1;
        }
      }
    }
  } ;
`;

const ProjectWrapper = styled.div`
  &:hover > article {
    opacity: 0.4;
  }
  & > article:hover {
    opacity: 1;
    box-shadow: 0 -2px 10px 5px rgba(21, 21, 21, 0.6);
  }

  @media screen and (max-width: 670px) {
    &:hover > article {
      opacity: 1;
    }
  }
`;
const Home = ({ repos, setRepos }) => {
  const loader = () => {
    if (repos.length <= 0) {
      fetchRepos(setRepos);
    }
    return;
  };

  useEffect(() => {
    loader();
  }, []);

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Wrapper>
      {repos.length >= 1 ? (
        <div className="wrapper">
          {currentTab === 0 ? (
            <>
              <HeaderTab
                title="Github"
                text="Live Projects"
                onClickFunc={() => setCurrentTab(1)}
              />
              <ProjectWrapper className="flex f-c flex-center">
                {repos.map((repo) => (
                  <ProjectsCard
                    name={repo.name}
                    date={repo.date}
                    language={repo.language}
                    link={repo.url}
                    key={repo.id}
                  />
                ))}
              </ProjectWrapper>
            </>
          ) : (
            <>
              <HeaderTab
                title="Live Projects"
                text="Back to Github"
                prev={true}
                onClickFunc={() => setCurrentTab(0)}
              />
              <ProjectWrapper className="flex f-c flex-center">
                <LiveProjects />
              </ProjectWrapper>
            </>
          )}
        </div>
      ) : (
        <div className="loader">
          <img src="/images/loader.gif" alt="preloader" />

          <p style={{ marginTop: 20 }}>
            <i>Loading...</i>
          </p>
        </div>
      )}
    </Wrapper>
  );
};

const HeaderTab = (props) => {
  return (
    <div className="header flex">
      <div className="flex title">
        <i
          className={`fa-solid ${props.prev ? 'fa-laptop-code' : 'fa-code'}`}
        ></i>
        <h2>{props.title}</h2>
      </div>
      <div onClick={props.onClickFunc} className="flex ai-c navigation">
        <p>{props.text}</p>
        <i
          className={`fa-solid ${
            props.prev ? 'fa-arrow-left' : 'fa-arrow-right'
          }`}
        ></i>
      </div>
    </div>
  );
};

export default Home;

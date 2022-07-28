import { useEffect, useState } from 'react';
import { format } from 'fecha';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';

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
`;

const ProjectWrapper = styled.div`
  &:hover > article {
    opacity: 0.4;
  }
  & > article:hover {
    opacity: 1;
    box-shadow: 0 -2px 10px 5px rgba(21, 21, 21, 0.6);
  }
`;
const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = () => {
    fetch('https://api.github.com/users/rehkmansa/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        const newArr = [];

        data.forEach((arr) => {
          const {
            id,
            fork,
            name,
            html_url,
            created_at,
            updated_at,
            description,
            language,
          } = arr;

          const element = {
            id,
            name,
            description,
            url: html_url,
            language,
            date: {
              createdAt: format(new Date(created_at), 'isoDate'),
              updatedAt: format(new Date(updated_at), 'isoDate'),
            },
          };
          if (fork) return;
          newArr.push(element);
        });
        setRepos(newArr);
      });
  };
  return (
    <Wrapper>
      {repos.length >= 1 ? (
        <div className="wrapper">
          <div className="header flex">
            <div className="flex title">
              <i className="fa-solid fa-code"></i>
              <h2>GitHub Projects</h2>
            </div>
            <div className="flex ai-c navigation">
              <p>Next</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
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

export default Home;

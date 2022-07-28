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
            pushed_at,
            description,
            language,
          } = arr;

          const element = {
            id,
            name,
            description,
            url: html_url,
            language,
            createdAt: format(new Date(created_at), 'isoDate'),
            updatedAt: format(new Date(updated_at), 'isoDate'),
            pushedAt: format(new Date(pushed_at), 'isoDate'),
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
        repos.map((repo, n) => <ProjectsCard name={repo.name} />)
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

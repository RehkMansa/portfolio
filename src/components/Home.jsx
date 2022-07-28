import { useEffect, useState } from 'react';
import { format } from 'fecha';

const Wrapper = styled.div``
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
      <p>home</p>
      {repos.length >= 1
        ? repos.map((repo, n) => (
            <RepoCard
              key={repo.id}
              count={n + 1}
              name={repo.name}
              createdAt={repo.createdAt}
              updatedAt={repo.updatedAt}
            />
          ))
        : <div>
          </div>}
    </Wrapper>
  );
};

export default Home;

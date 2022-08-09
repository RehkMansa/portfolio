import { format } from 'fecha';

export const fetchRepos = (setRepos) => {
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
          pushed_at,
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
            createdAt: format(new Date(pushed_at), 'isoDate'),
            updatedAt: format(new Date(updated_at), 'isoDate'),
          },
        };
        if (fork) return;
        newArr.push(element);
      });
      setRepos(newArr);
    });
};

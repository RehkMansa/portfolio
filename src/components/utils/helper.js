import { format } from 'fecha';

export const fetchRepos = (setRepos) => {
  fetch('https://api.github.com/users/rehkmansa/repos?sort=pushed')
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
          created_at,
        } = arr;

        const element = {
          id,
          name,
          description,
          url: html_url,
          language,
          date: {
            createdAt: format(new Date(created_at), 'mediumDate'),
            updatedAt: format(new Date(pushed_at), 'mediumDate'),
          },
        };
        if (fork) return;
        newArr.push(element);
      });
      setRepos(newArr);
    });
};

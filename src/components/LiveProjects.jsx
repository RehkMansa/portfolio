import ProjectsCard from './ProjectsCard';

const projects = [
  {
    id: 0,
    name: 'IgrowAfrika',
    language: 'React JS + Javascript',
    desc: 'I worked in along side another developer to create the marketing website',
    url: 'https://igrowafrika.com/',
  },
  {
    id: 1,
    name: 'Swizel',
    language: 'HTML + CSS + JS + PHP',
    desc: 'Redesigned the website to increase loading time and added a portfolio page to show recent works',
    url: 'https://swizel.co/',
  },
  {
    id: 2,
    name: 'Ubique Media',
    language: 'HTML + CSS + JS',
    desc: "Used a web template to create a dynamic single page website, it was an extremely daunting task it had to be finished in a day... Author's, it still needs more work and a complete redesign",
    url: 'https://swizel.co/',
  },
  {
    id: 3,
    name: 'Kruise Kontrol',
    language: 'Wordpress + Custom CSS',
    desc: 'A blog party website using wordpress... simple, fast and really worth it',
    url: 'https://swizel.co/',
  },
  {
    id: 4,
    name: 'SUC Campaign Site',
    language: 'HTML + CSS + JS + PHP',
    desc: 'This website brings bitter sweet memories as it was to be for the then Labour Party candidate, but that did not work out and now we have a seemingly useless website',
    url: 'https://swizel.co/',
  },
];

const LiveProjects = (props) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectsCard
          name={project.name}
          language={project.language}
          link={project.url}
          desc={project.desc}
          key={project.id}
          type={'live projects'}
        />
      ))}
    </>
  );
};

export default LiveProjects;

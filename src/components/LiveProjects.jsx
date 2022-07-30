import ProjectsCard from './ProjectsCard';

const projects = [
  {
    id: 0,
    name: 'IgrowAfrika',
    language: 'React JS, Javascript',
    desc: 'lorem 2200',
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

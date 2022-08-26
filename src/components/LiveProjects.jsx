import ProjectsCard from './ProjectsCard';
import { liveProjects } from './utils/data';

const LiveProjects = () => {
  return (
    <>
      {liveProjects.map((project) => (
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

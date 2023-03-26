import { useGetProjectsQuery } from "../features/projects/projectsApi";
import Project from "./Project";

export default function ProjectList() {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  // decide what to render
  let content;
  if (isLoading) {
    content = <div className="checkbox-container">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="checkbox-container">There was an error</div>;
  } else if (!isLoading && !isError && projects?.length === 0) {
    content = <div className="checkbox-container">No projects found!</div>;
  } else {
    content = projects.map((project) => (
      <Project key={project.id} project={project} />
    ));
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}

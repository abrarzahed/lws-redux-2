import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetProjectsQuery } from "../features/projects/projectsApi";
import { projectAdded } from "../features/projects/projectsSlice";
import Project from "./Project";

export default function ProjectList() {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
  } = useGetProjectsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    projects?.forEach((project) => {
      if (isSuccess) {
        dispatch(projectAdded(project.projectName));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, dispatch]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <div className="checkbox-container">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="checkbox-container">There was an error</div>;
  } else if (!isLoading && !isError && projects?.length === 0) {
    content = <div className="checkbox-container">No projects found!</div>;
  } else {
    content = projects.map((project) => {
      return <Project key={project.id} project={project} />;
    });
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}
